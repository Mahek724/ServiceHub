// const paymentModel = require("../../model/payment/Payment_tbl");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../../model/payment/paymentModel.js");
const paymentModel = require("../../model/payment/Payment_tbl.js");
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});
const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  const serviceReqID = req.params.serviceid;
  const amountPaid = req.params.amount;

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    await paymentModel.create({
      request_id: serviceReqID,
      amount: amountPaid,
      razorpay_order_id: razorpay_order_id,
      razorpay_payment_id: razorpay_payment_id,
    });
    res.status(200).json({
      success: true,
      request_id: serviceReqID,
      redirect_url: "http://localhost:3000/bookingdetails",
    });
    await redirect_url("http://localhost:3000/bookingdetails");
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = {
  checkout,
  paymentVerification,
};

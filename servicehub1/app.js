const express = require("express");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");

const cors = require("cors");
const { config } = require("dotenv");
const cloudinary = require("cloudinary");
const app = express();
const fileUpload = require("express-fileupload");
config({
  path: "./config.env",
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
cloudinary.config({
  secure: true,
  cloud_name: "dk8wd9myt",
  api_key: "753893913514568",
  api_secret: "LF5-gXTsWBd44dXY8qYF73x4qh4",
});
const PORT = 1000;

const userRoutes = require("./routes/Users_Routes/UserRoutes");
const spRoutes = require("./routes/Users_Routes/SpRoutes");
const docRoutes = require("./routes/Doc_Routes/DocumentRoutes");
const spDocRoutes = require("./routes/Doc_Routes/SpDocRoutes");
const catRoutes = require("./routes/Category_Routes/ServiceCatRoutes");
const subcatRoutes = require("./routes/Category_Routes/SubCatRoutes");
const nestedcatRoutes = require("./routes/Category_Routes/NestedCatRoutes");
const minicatRoutes = require("./routes/Category_Routes/MiniCatRoutes");
const offerRoutes = require("./routes/OfferRoutes");
const serviceRoutes = require("./routes/Service_Routes/ServiceRoutes");
const servicereqRoutes = require("./routes/Service_Routes/ServiceReqRoutes");
const cartRoutes = require("./routes/Cart_Routes/CartRoutes");
const cartItemRoutes = require("./routes/Cart_Routes/CartItemRoutes");
const feedbackRoutes = require("./routes/FeedbackRoutes");
const yoeRoutes = require("./routes/YoeRoutes");
const spAvlRoutes = require("./routes/SpAvlRoutes");
const paymentRoutes = require("./routes/Payment_Routes/PaymentRoutes");
const refundRoutes = require("./routes/Payment_Routes/RefundRoutes");
const chatRoutes = require("./routes/Chat_Routes/ChatRoutes");
const messageRoutes = require("./routes/Chat_Routes/MessageRoutes");
const otpRoutes = require("./routes/Users_Routes/OtpRoutes");

app.use("/user", userRoutes);
app.use("/otp", otpRoutes);
app.use("/sp", spRoutes);
app.use("/doc", docRoutes);
app.use("/spDoc", spDocRoutes);
app.use("/cat", catRoutes);
app.use("/subcat", subcatRoutes);
app.use("/nestedcat", nestedcatRoutes);
app.use("/minicat", minicatRoutes);
app.use("/offer", offerRoutes);
app.use("/service", serviceRoutes);
app.use("/serviceReq", servicereqRoutes);
app.use("/cart", cartRoutes);
app.use("/cartItem", cartItemRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/yoe", yoeRoutes);
app.use("/spavl", spAvlRoutes);
app.use("/api", paymentRoutes);
app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
app.use("/refund", refundRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

const db = mongoose.connect("mongodb://127.0.0.1:27017/todo_db", {});

mongodb: db.then(() => {
  console.log("Database connected successfully...");
}).catch((error) => {
  console.log("connectin error");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
// module.exports = instance;

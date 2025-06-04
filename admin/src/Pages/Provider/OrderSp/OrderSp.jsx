import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar";
import Widget from "../../../components/Dashboard/Widget";
import OrderTable from "./OrderTable";
import { useState, useEffect } from "react";
import { getdata } from "../../../services/Apis";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";

const OrderSP = () => {
  const [services, setServices] = useState([]);
  const [len, setlen] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const spid = localStorage.getItem("userID");
    try {
      const response = await getdata(`/serviceReq/getOrdersBySPID/${spid}`);
      console.log("resp", response.data.data);
      setServices(response.data.data);
      setlen(response.data.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatOrderTime = (dateTimeString) => {
    const orderTime = new Date(dateTimeString);
    const ISTTime = orderTime.toLocaleString("en-US", {
      timeZone: "Asia/Kolkata", // Set the timezone to IST
    });
    return ISTTime;
  };

  // const calculateTimeColor = (dateTimeString) => {
  //   const orderTime = new Date(dateTimeString);
  //   const currentTime = new Date();
  //   const differenceInMilliseconds = orderTime - currentTime;
  //   const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

  //   return differenceInHours <= 1 ? "green" : "red";
  // };
  const calculateTimeColor = (dateTimeString) => {
    const orderTime = new Date(dateTimeString);
    const currentTime = new Date();
    const differenceInSeconds = (currentTime - orderTime) / 1000; // Convert milliseconds to seconds
    console.log("DifferenceIn", differenceInSeconds);
    return differenceInSeconds > 3600 ? "red" : "green";
  };

  const handleTickButtonClick = async (id) => {
    const value = 1;
    const resp = await axios.put(
      `http://localhost:1000/serviceReq/updateBookingStatus/${id}/${value}`
    );
    console.log("resp,bookingStstus updated", resp);
  };

  const handleCancelButtonClick = async (id) => {
    const value = 2;
    try {
      const resp = await axios.put(
        `http://localhost:1000/serviceReq/updateBookingStatus/${id}/${value}`
      );
      console.log("resp,bookingStstus updated", resp);
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  return (
    <div className="provider">
      <Sidebar />
      <div className="providercontainer bg-slate-50">
        <div className="widgets">
          <Widget type="Torders" datas={len} />
          <Widget type="Porders" datas={0} />
          <Widget type="Corders" datas={3} />
        </div>
        <div className="flex flex-wrap m-2 gap-4">
          {services.map(
            (serv) =>
              (serv.booking_status === 0 || serv.booking_status === 1) && (
                <div key={serv._id}>
                  <Card className="w-96 m-4">
                    <CardHeader className="bg-blue-100 h-10 flex items-center px-2">
                      <div className=" flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                          Order Time :
                        </Typography>
                        <Typography
                          color={calculateTimeColor(serv.orderTime)}
                          className="font-medium"
                        >
                          {formatOrderTime(serv.orderTime)}
                        </Typography>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div className="mb-1 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                          {serv.service_id.mini_cat_id.mini_cat_name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                          {serv.price && serv.price}Rs
                        </Typography>
                      </div>
                      <div className="mb-1 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                          {serv.available_date}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                          {serv.available_time}
                        </Typography>
                      </div>
                      <div className="mb-1">
                        <span className="flex items-center justify-between">
                          <Typography color="blue-gray" className="font-medium">
                            {serv.customer}
                          </Typography>
                          <Typography
                            color="blue-gray"
                            className="font-semibold text-sm"
                          >
                            {serv.phoneNo}
                          </Typography>
                        </span>
                        <Typography color="gray" className="font-small text-sm">
                          {serv.address}
                        </Typography>
                      </div>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-between gap-4">
                      {calculateTimeColor(serv.orderTime) === "green" && (
                        <>
                          <Button
                            onClick={() => handleTickButtonClick(serv._id)}
                            ripple={false}
                            fullWidth={true}
                            className="bg-green-600 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                          >
                            Tick
                          </Button>
                          <Button
                            onClick={() => handleCancelButtonClick(serv._id)}
                            ripple={false}
                            fullWidth={true}
                            className="bg-red-600 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                          >
                            Cancel
                          </Button>
                        </>
                      )}
                      {calculateTimeColor(serv.orderTime) === "red" && (
                        <Button
                          onClick={() => handleCancelButtonClick(serv._id)}
                          ripple={false}
                          fullWidth={true}
                          className="bg-red-600 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                          Cancel
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </div>
              )
          )}
        </div>

        <div className="listcontainer">
          <div className="listTitle">Service Provider Details</div>
          <OrderTable rows={services} />
        </div>
      </div>
    </div>
  );
};

export default OrderSP;

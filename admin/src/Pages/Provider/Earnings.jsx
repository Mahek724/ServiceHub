import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { TABLE_HEAD, TABLE_ROWS } from "../../Data/Serviceprovider/Database";
import Widget from "../../components/Dashboard/Widget";
import Table from "../../components/Provider/tablesss/Table/Table";
import { useState, useEffect } from "react";
import { getdata } from "../../services/Apis";
import OrderTable from "./OrderSp/OrderTable";
const Earnings = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const spid = localStorage.getItem("userID");
    try {
      const response = await getdata(`/serviceReq/getOrdersBySPID/${spid}`);

      setServices(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("services", services);
  return (
    <div className="listbox">
      <Sidebar />
      <div className="listboxcontainer">
        <div className=" flex gap-10 w-[50%] my-5 mx-6">
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="listcontainer">
          <div className="listTitle">User Details</div>
          {/* <Table heads={TABLE_HEAD} rows={TABLE_ROWS} /> */}
          <OrderTable rows={services} />
        </div>
      </div>
    </div>
  );
};
export default Earnings;

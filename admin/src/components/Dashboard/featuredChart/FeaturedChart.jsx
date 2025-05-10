import "./FeaturedChart.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
const FeaturedChart = () => {
  const [len, setlen] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response1 = await axios.get(
        "http://localhost:1000/service/getAllService"
      );
      setlen(response1.data.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="featuredchart">
      <div className="top">
        <h1 className="title">Total Services Offering</h1>
      </div>
      <div className="bottom mt-[5rem]">
        <div className="featuredbar">
          <CircularProgressbar value={len} strokeWidth={5} />
        </div>
        <p className="title">Total services offered</p>
        <p className="amount">{len}</p>
      </div>
    </div>
  );
};
export default FeaturedChart;

import React, { useState, useEffect } from "react";
import mask from "../assets/images/mask.jpg";
import { BsCameraVideo } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";
import Calendar from "./Calendar";
import { Link, useParams } from "react-router-dom";
import Time from "./Time";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLocation } from "utils/DetailSlice";
import { setHour } from "utils/DateSlice";

const ThirtyMin = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const locationHandler = (event) => {
    dispatch(setLocation(event.target.value));
    console.log(event.target.value);
  };
  const date = useSelector((store) => store.DateSlice.date);
  const [data, setData] = useState([]);
  const location = useSelector((state) => state.DetailSlice.location);
  useEffect(() => {
    axios.get("http://worldtimeapi.org/api/timezone").then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`http://worldtimeapi.org/api/timezone/${location}`)
      .then((res) => {
        const isoString = res.data.datetime;
        const hour = parseInt(isoString.substring(11, 13), 10);
        dispatch(setHour(hour));
        console.log(hour);
      });
  }, [location]);

  return (
    <div className="container flex bg-[#c1c0c0] mt-[6rem] mr-[auto] ml-auto w-[50%] h-[400px] relative rounded-lg">
      <div className="left-side flex felx-col w-[40%] mt-2 ">
        <div className="mr-auto ml-auto">
          <div className="detail-field w-[200px] mr-auto ml-auto mt-4">
            <div className="image-wraper">
              <img
                src={mask}
                alt="mask"
                className="h-[70px] w-[70px] rounded-full"
              />
            </div>

            <div className="name-block text-sm bt-1">Sahan Shrestha</div>
            <div className="time-slot text-xl ">
              {id === "30minute" ? "30 Min Meeting" : "15 Min Meeting"}
            </div>
            <div className="call-type">
              <div className=" align-middle">
                <div className="flex p-1 mt-1 ">
                  <p className="pt-1 pr-2">
                    {" "}
                    <BsCameraVideo />{" "}
                  </p>{" "}
                  <span> Call Video</span>
                </div>

                <div className="flex p-1">
                  <p className="pt-1 pr-2 ">
                    {" "}
                    <IoIosTime />{" "}
                  </p>{" "}
                  <span>{id === "30minute" ? "30 Minutes" : "15 Minutes"}</span>
                </div>
                <div className="flex p-1 cursor-pointer">
                  <p className="pt-1 pr-2 ">
                    {" "}
                    <TbWorld />{" "}
                  </p>
                  <br />
                  <div className="flex flex-col">
                    <p>Set Location</p>
                    <div className="flex-col">
                      <select
                        name=""
                        onChange={locationHandler}
                        style={{ width: "100%", height: "2rem" }}
                        // onChange={changecountrytime}
                      >
                        <option value="Select TimeZone">Select TimeZone</option>
                        {data.map((timezone) => (
                          <option value={timezone}>{timezone}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-10 ">
                  <Link
                    to="/"
                    className="absolute bg-white bottom-5 left-3 rounded-full text-2xl "
                  >
                    {" "}
                    <AiOutlineArrowLeft />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side flex max-h-[300px] mt-5 w-[60%]">
        <p className="w=100%">
          <Calendar />
        </p>
      </div>
      <div className="right-Sidebar mt-3 ml-2]">{date && <Time />}</div>
    </div>
  );
};

export default ThirtyMin;

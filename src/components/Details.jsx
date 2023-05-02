// import MeetingDetails from "./MeetingDetails";
import { BsCameraVideo, BsGlobe } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";

import { useSelector } from "react-redux";
import mask from "../assets/images/mask.jpg";
import DetailForm from "./DetailForm";
import { useParams } from "react-router-dom";
const Details = () => {
  const date = useSelector((state) => state.DateSlice.date);
  console.log(date);
  const time = useSelector((state) => state.DateSlice.time);
  console.log(time);
  const location = useSelector((state) => state.DetailSlice.location);
  console.log(location);
  const { pathDetail } = useParams();
  return (
    <div className="w-screen h-screen flex justify-center mt-[6rem] mb-6 bg-[#f0f0f0] ">
      <div className=" h-[400px] bg-[#959393] rounded-xl p-5 flex ">
        <div className="w-50 border-r h-full pl-2">
          <div className="left-side flex felx-col w-[50%]  ">
            <div className="left-side flex felx-col w-[50%]  ">
              <div className="mr-auto ml-auto">
                <div className="detail-field w-[300px] mr-auto ml-auto">
                  <div className="image-wraper p-2 ">
                    <img
                      src={mask}
                      alt="mask"
                      className="h-[70px] w-[70px] rounded-full"
                    />
                  </div>

                  <div className="name-block text-sm bt-1">Sahan Shrestha</div>
                  <div className="time-slot text-xl ">
                    {pathDetail === "30minute"
                      ? "30 min Meeting"
                      : "15 min Meeting"}
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
                        <span>
                          {" "}
                          {pathDetail === "30minute"
                            ? "30 Minute"
                            : "15 Minute"}
                        </span>
                      </div>
                      <div className="flex p-1">
                        {/* <span>30 minutes</span> */}
                        <div className="flex items-center ">
                          <div className="flex flex-col">
                            <div className="flex pt-1">
                              <i className="mr-2 pt-1">
                                <BsGlobe />
                              </i>
                              <p className="mr-2">Details</p>
                            </div>

                            <br />
                            <div className="flex flex-col ml-7 ">
                              <p> date:{date}</p>
                              <p>time:{time}</p>
                              <p> location:{location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-80 ml-2">
          <DetailForm />
        </div>
      </div>
    </div>
  );
};
export default Details;

import { BiTimeFive } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const HomeData = () => {
  return (
    <>
      <div className="container mt-[8rem] ml-auto mr-auto">
        <div className="name-field text-center text-[50px] text-[#243a3a]">
          Sahan Shrestha
        </div>
        <div className="description-field text-center  text-[#243a3a]">
          (Web Developer/FrontEnd Developer)
        </div>
        <Link
          to="/15minute"
          className="meeting-wrapper mt-[4rem] flex justify-center flex-col align-middle mb-[.5rem] text-black w-[600px] rounded-[10px] mr-auto ml-auto bg-[#d5d4d4] hover:bg-orange-300    "
        >
          <div className="fifteen-min-wrapper flex flex-col pt-[2rem] pb-[2rem] pr-[1.5rem] pl-[1.5rem] rounded relative cursor-pointer">
            <div className="time-detail "> 15 Min Meeting</div>
            <div className="flex">
              <div className="flex rounded-[30px] bg-slate-100 w-[50px] mt-2 p-[4px] justify-center">
                <p className="pt-[4px]">
                  <BiTimeFive />
                </p>
                <span>15</span>
              </div>
              <div className="flex rounded-[30px] bg-slate-100 w-[80px] mt-2 p-[5px] justify-center ml-3">
                <span>1 -</span>
                <p className="pt-[4px]">
                  <BsFillPersonFill />
                </p>
                <span>- 1</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="meeting-wrapper mt-[.5rem] flex justify-center flex-col align-middle mb-[.5rem] text-black w-[600px] rounded-[10px] mr-auto ml-auto bg-[#d5d4d4] hover:bg-orange-300 ">
          <Link
            to="/30minute"
            className="fifteen-min-wrapper flex flex-col pt-[2rem] pb-[2rem] pr-[1.5rem] pl-[1.5rem] rounded relative cursor-pointer"
          >
            <div className="time-detail "> 30 Min Meeting</div>
            <div className="flex">
              <div className="flex rounded-[30px] bg-slate-100 w-[50px] p-[4px] mt-2 justify-center">
                <p className="pt-[4px]">
                  <BiTimeFive />
                </p>
                <span>30</span>
              </div>
              <div className="flex rounded-[30px] bg-slate-100 w-[80px] p-[5px] mt-2 justify-center ml-3">
                <span>1 -</span>
                <p className="pt-[4px]">
                  <BsFillPersonFill />
                </p>
                <span>- 1</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeData;

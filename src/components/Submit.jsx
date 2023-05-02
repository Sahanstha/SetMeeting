import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const Submit = () => {
  const { redo } = useParams();
  const date = useSelector((state) => state.DateSlice.date);
  const time = useSelector((state) => state.DateSlice.time);
  const location = useSelector((state) => state.DetailSlice.location);
  const username = useSelector((state) => state.DetailSlice.username);
  const email = useSelector((state) => state.DetailSlice.email);
  const addnote = useSelector((state) => state.DetailSlice.addnote);
  const guest = useSelector((state) => state.DetailSlice.guest);
  return (
    <div className="m-auto w-[40%] mt-[6rem] flex flex-col items-center border p-4 rounded-[3.5rem] bg-[#d3d2d2] shadow-md shadow-black">
      <div className="flex flex-col mb-4 p-8 items-center">
        <p> Your Meeting has been Scheduled.</p>
        <br />
        <p className="mb-8">Details</p>
        <p className="">Date: {date}</p>
        <p className=""> Scheduled Time: {time}</p>
        <p className="">Location: {location}</p>
        <p className="">Username: {username}</p>
        <p className="">Email: {email}</p>
        <p className="">Guest Email: {guest}</p>
        <p className="">Additional Note: {addnote}</p>
      </div>
      <p>
        Click
        <Link to={`/${redo}`} className="font-bold underline">
          Here
        </Link>
        to reschedule.
      </p>
      <p>
        Click
        <Link to={`/`} className="font-bold underline">
          Here
        </Link>
        to Exit.
      </p>
    </div>
  );
};

export default Submit;

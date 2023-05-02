import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GiHumanTarget } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setUsername, setEmail, setAddnote, setGuest } from "utils/DetailSlice";

const DetailForm = () => {
  const { pathDetail } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    pathDetail === "30minute" && navigate("/submit/30minute");
    pathDetail === "15minute" && navigate("/submit/15minute");
  };
  const handleName = (event) => {
    dispatch(setUsername(event.target.value));
  };
  const handleEmail = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const handleText = (event) => {
    dispatch(setAddnote(event.target.value));
  };
  const handleGuest = (event) => {
    dispatch(setGuest(event.target.value));
  };
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm font-bold">Your Name</p>

      <input
        onChange={handleName}
        type="text"
        className="border p-2 w-full rounded-md mt-1 "
        required
      />
      <p className="text-sm font-bold mt-2">Email address</p>
      <input
        onChange={handleEmail}
        type="email"
        className="border p-2 w-full rounded-md mt-1 "
        required
      />
      {click && (
        <div>
          <p className="text-sm font-bold mt-2">Guest Email</p>
          <input
            onChange={handleGuest}
            type="email"
            className="border p-2 w-full rounded-md mt-1"
          />
        </div>
      )}

      <p className="text-sm font-bold mt-2">Additional Notes</p>

      <textarea
        name=""
        id=""
        cols="40"
        rows="3"
        className="border"
        onChange={handleText}
      ></textarea>
      <div className="flex">
        <p
          className="text-lg pt-3 ml-3 mr-3 cursor-pointer"
          onClick={handleClick}
        >
          <GiHumanTarget />
        </p>
        <button className="border border-cyan-100 mr-4 rounded-md bg-slate-400 p-2">
          Submit
        </button>

        <Link to="/">
          <button className="border border-cyan-100 rounded-md bg-slate-400 p-2">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};

export default DetailForm;

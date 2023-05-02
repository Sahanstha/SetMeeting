import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setTime } from "../utils/DateSlice";
import { twelveHourFormat, twentyFourFormat } from "../utils/hourFormat";

const Time = () => {
  const [newArray, setNewArray] = useState(null);
  const dateNew = useSelector((store) => store.DateSlice.date);
  const [timeState, setTimeState] = useState(twelveHourFormat);
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();

  const handleToggle = () => {
    setTimeState(
      timeState === twelveHourFormat ? twentyFourFormat : twelveHourFormat
    );
    setSelectedItem(null); // reset selected item when toggling between time formats
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleItemClick = (item) => {
    setSelectedItem(item);
    dispatch(setTime(item));
    {
      id === "30minute" && navigate("/details/30minute");
    }
    {
      id === "15minute" && navigate("/details/15minute");
    }
  };

  const hour = useSelector((state) => state.DateSlice.hour);
  useEffect(() => {
    const date = new Date(dateNew);
    const val = date.getDay();
    const month = date.getMonth();
    const currentDate = new Date();
    console.log(val);
    if (
      dateNew !== null &&
      currentDate.getDay() === val &&
      currentDate.getMonth() === month
    ) {
      console.log(hour);
      setNewArray(
        twentyFourFormat.thirty.filter((item) => {
          return parseInt(item) > hour + 1;
        })
      );
    } else {
      setNewArray(null);
    }
  }, [dateNew]);
  console.log(newArray);
  return (
    <div className="w-60 ml-2 border-l h-full p-2 overflow-y-scroll space-y-2">
      <div className="flex justify-between">
        <h1 className="font-medium mb-4"></h1>
        <div className="text-lg  pt-[8px] pl-[6rem] font-bold">
          {timeState === twelveHourFormat ? "12-hr" : "24-hr"}
        </div>
        {timeState === twelveHourFormat ? (
          <span
            onClick={handleToggle}
            className="material-symbols-outlined text-5xl cursor-pointer "
          >
            toggle_on
          </span>
        ) : (
          <span
            onClick={handleToggle}
            className="material-symbols-outlined text-5xl cursor-pointer"
          >
            toggle_off
          </span>
        )}
      </div>

      {!newArray &&
        (id === "30minute" ? timeState.thirty : timeState.fifteen).map(
          (item, index) => {
            return (
              <div className="space-y-2" key={index}>
                <button
                  className={`w-full border p-2 hover:bg-gray-300 ${
                    selectedItem === item ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
              </div>
            );
          }
        )}
      {newArray &&
        newArray.map((item, index) => {
          return (
            <div className="space-y-2" key={index}>
              <button
                className={`w-full border p-2 hover:bg-gray-300 ${
                  selectedItem === item ? "bg-gray-200" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default Time;

import React from "react";

const CountdownTimer = ({ time }) => {
  const formatTime = (time: any) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className="mb-4 text-[#794BCC] font-mitr text-[14px] leading-[20px]">
      {/* {time?.days > 0 && (*/}
      <span className="text-[#794BCC] font-mitr text-[14px] leading-[20px]">
        {formatTime(time?.days)} d{" "}
      </span>
      {/*)}*/}
      <span className=" text-[#794BCC] font-mitr text-[14px] leading-[20px]">
        {formatTime(time?.hours)} h {formatTime(time?.minutes)} m{" "}
        {formatTime(time?.seconds)} s
      </span>
    </div>
  );
};

export default CountdownTimer;

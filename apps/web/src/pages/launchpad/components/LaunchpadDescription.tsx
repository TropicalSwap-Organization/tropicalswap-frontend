import React from "react";
import Timeline from "./Timeline";
import Accordion from "./Accordion";

const LaunchpadDescription: React.FC = () => {
  return (
    <>
      <div className="p-4 text-center flex flex-col">
        <div className="text-[#FFBF00] mb-2 text-[20px] leading-[20px] lg:text-[30px] lg:leading-[30px] font-mitr">
          How to take part in the Private and Public Sales
        </div>
        <div
          className=" mb-20 text-[30px] leading-[35px]  lg:text-[40px] lg:leading-[50px] font-mitr font-bold text-white"
          style={{ color: "white" }}
        >
          Follow the steps below to participate
        </div>
      </div>
      <div className="max-w-[1200px] w-full lg:p-8 p-4">
        <Timeline />
        <Accordion />
      </div>
    </>
  );
};

export default LaunchpadDescription;

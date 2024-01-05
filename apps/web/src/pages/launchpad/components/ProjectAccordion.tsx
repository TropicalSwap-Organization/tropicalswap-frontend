import React from "react";

type ProjectAccordionProps = {
  title: string;
  color: string;
  children: any;
};

const ProjectAccordion: React.FC<ProjectAccordionProps> = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

  const style = isLargeScreen
    ? { border: "4px solid #794BCC" }
    : { border: "none" };

  return (
    /*    <div
      className="lg:px-24 px-4 lg:py-6 py-4 bg-white rounded-3xl"
      style={{ border: "3px solid #C54177" }}
    >*/
    <div className="w-full flex justify-center">
      <div className="max-w-[900px] w-full ">
        <div
          className={`bg-[${
            props.color
          }] flex items-center justify-between w-full lg:px-5 py-5 px-4 font-bold text-left text-[16px] leading-[22px] lg:text-[20px] lg:leading-[22px] font-mitr border border-b-0 border-gray-200 rounded-2xl ${
            activeIndex === 0 ? "lg:rounded-t-2xl lg:rounded-b-none" : ""
          } focus:ring-4 hover:cursor-pointer `}
          onClick={() => toggleAccordion(0)}
        >
          <span className="text-white w-full justify-center flex font-mitr lg:text-[40px] lg:leading-[50px] text-[30px] leading-[35px]">
            {props.title}
          </span>

          <button className="p-1 border-2 border-white rounded-lg text-[#C54177] text-[20px] leading-[30px] font-mitr">
            {activeIndex !== 0 ? (
              <span className="flex items-center  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                {/*Hide{" "}*/}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.75 10.5L14 19.25L5.25 10.5"
                    stroke="#FFFFFE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                {/*Details{" "}*/}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 17.5L14 8.75L22.75 17.5"
                    stroke="#FFFFFE"
                    strokeWidth="2.03"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
        {activeIndex === 0 && (
          <div
            className="lg:px-5 px-0 py-5 lg:bg-white bg-[#400C8B] rounded-b-2xl"
            style={style}
          >
            {props.children}
            {/* <p className="text-[#400C8B]  text-[16px] leading-[22px] font-mitr">
            The Private Sale offers eligible whitelisted addresses the
            opportunity to acquire $PAPPLE at the most affordable price. On the
            other hand, the Public Sale is available to all individuals
            interested in purchasing $PAPPLE, without any restrictions. It
            provides the chance to buy $PAPPLE at a price lower than the initial
            market value.
          </p>*/}
          </div>
        )}
      </div>
    </div>
    /*</div>*/
  );
};

export default ProjectAccordion;

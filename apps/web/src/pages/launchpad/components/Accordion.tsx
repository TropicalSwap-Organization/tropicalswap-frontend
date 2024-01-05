import React from "react";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div
      className="lg:px-24 px-4 lg:py-6 py-4 bg-white rounded-3xl"
      style={{ border: "3px solid #C54177" }}
    >
      <div className="lg:w-40 lg:h-16 w-fit px-4 py-2 rounded-full bg-[#C54177] flex items-center justify-center text-white lg:text-4xl text-[20px] leading-[25px] font-bold lg:mb-12 mb-4">
        Details
      </div>
      <div className="max-w-[900px]">
        <div
          className=" bg-white flex items-center justify-between w-full lg:px-5 px-0 py-5 font-bold text-left text-[#400C8B] text-[16px] leading-[22px] lg:text-[20px] lg:leading-[22px] font-mitr border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 hover:cursor-pointer "
          onClick={() => toggleAccordion(0)}
        >
          Whats’ the difference between Private and Public Sale?
          <button className="ml-2 text-[#C54177] text-[20px] leading-[30px] font-mitr">
            {activeIndex === 0 ? (
              <span className="flex items-center  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Hide{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Details{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
        {activeIndex === 0 && (
          <div className="lg:px-5 px-0 py-5 bg-white">
            <p className="text-[#400C8B]  text-[16px] leading-[22px] font-mitr">
              The Private Sale offers eligible whitelisted addresses the
              opportunity to acquire $PAPPLE at the most affordable price. On
              the other hand, the Public Sale is available to all individuals
              interested in purchasing $PAPPLE, without any restrictions. It
              provides the chance to buy $PAPPLE at a price lower than the
              initial market value.
            </p>
          </div>
        )}
        <div
          onClick={() => toggleAccordion(1)}
          className=" bg-white flex items-center justify-between w-full lg:px-5 px-0 py-5  font-bold text-left text-[#400C8B]  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px]  font-mitr border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 hover:cursor-pointer "
        >
          How does the Private Sale work? How can I get whitelisted?
          <button className="ml-2 text-[#C54177] text-[20px] leading-[30px] font-mitr">
            {activeIndex === 1 ? (
              <span className="flex items-center  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Hide{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Details{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
        {activeIndex === 1 && (
          <div className="lg:px-5 px-0 py-5 bg-white">
            <p className="text-[#400C8B]  text-[16px] leading-[22px] font-mitr">
              The Private Sale exclusively serves to whitelisted addresses,
              offering them the chance to acquire $PAPPLE at the most favorable
              price. Each wallet has a maximum limit of $2,500 USDC for
              participation, and there are a total of 100 whitelist spots up for
              grabs. The sale will remain open for a duration of 48 hours. It is
              important to note that the whitelist spots are over-allocated,
              meaning that if you join too late, there is a possibility of
              missing out on the opportunity to purchase $PAPPLE when there are
              no more tokens available. To become whitelisted, please refer to
              the rules provided here.
            </p>
          </div>
        )}
        <div
          onClick={() => toggleAccordion(2)}
          className=" bg-white flex items-center justify-between w-full lg:px-5 px-0 py-5  font-bold text-left text-[#400C8B]  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px]  font-mitr border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 hover:cursor-pointer "
        >
          How does the Public Sale work?
          <button className="ml-2 text-[#C54177] text-[20px] leading-[30px] font-mitr">
            {activeIndex === 2 ? (
              <span className="flex items-center text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Hide{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Details{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
        {activeIndex === 2 && (
          <div className="lg:px-5 px-0 py-5 bg-white">
            <p className="text-[#400C8B]  text-[16px] leading-[22px] font-mitr">
              The Public Sale is open to everyone, giving the opportunity to
              purchase $PAPPLE at a price lower than the initial market value.
              The sale will remain available for a period of 96 hours. Once the
              sale concludes and initial liquidity is added, you will have the
              ability to claim your $PAPPLE tokens.
            </p>
          </div>
        )}
        <div
          onClick={() => toggleAccordion(3)}
          className=" bg-white flex items-center justify-between w-full lg:px-5 px-0 py-5  font-bold text-left text-[#400C8B]  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px]  font-mitr border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 hover:cursor-pointer "
        >
          How does the claim work?
          <button className="ml-2 text-[#C54177] text-[20px] leading-[30px] font-mitr">
            {activeIndex === 3 ? (
              <span className="flex items-center  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Hide{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Details{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
        {activeIndex === 3 && (
          <div className="lg:px-5 px-0 py-5 bg-white">
            <p className="text-[#400C8B]  text-[16px] leading-[22px] font-mitr">
              Regarding the Private Sale, you will be able to immediately claim
              30% of your tokens, while the remaining 70% will be unlocked
              gradually over a period of 30 days.As for the Public Sale, you can
              immediately claim 60% of your tokens, and the remaining 40% will
              be unlocked gradually over a period of 30 days.
            </p>
          </div>
        )}
        <div
          onClick={() => toggleAccordion(4)}
          className=" bg-white flex items-center justify-between w-full lg:px-5 px-0 py-5  font-bold text-left text-[#400C8B]  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px]  font-mitr border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 hover:cursor-pointer "
        >
          Can I commit to both Private and Public Sale?
          <button className="ml-2 text-[#C54177] text-[20px] leading-[30px] font-mitr">
            {activeIndex === 4 ? (
              <span className="flex items-center  text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px]">
                Hide{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center text-[16px] leading-[22px]  lg:text-[20px] lg:leading-[22px] ">
                Details{" "}
                <svg
                  className="w-4 h-4 text-[#C54177] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
        {activeIndex === 4 && (
          <div className="lg:px-5 px-0 py-5 bg-white">
            <p className="text-[#400C8B]  text-[16px] leading-[22px] font-mitr">
              Whitelisted wallets can participate in both the Private and Public
              Sale. On the other hand, non-whitelisted wallets can only
              participate in the Public Sale. To learn more about the process of
              getting whitelisted, please refer to the provided information
              here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

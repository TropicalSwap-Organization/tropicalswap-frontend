import React from "react";

const Timeline: React.FC = () => {
  return (
    <>
      {/*Desktop*/}
      <ol className="items-center lg:flex mb-20">
        <li
          key={1}
          className="relative mb-20 lg:mb-0 custom-li mr-8"
          style={{ listStyle: "none", width: "100%" }}
        >
          <div className="flex items-center">
            <div
              className="mt-3 sm:pr-8 bg-white rounded-3xl  w-full  h-full"
              style={{
                border: "3px solid #C54177",
              }}
            >
              <div className="p-4  ">
                <h3 className="text-[#400C8B] text-[18px] leading-[25px] font-mitr">
                  Prepare USDC & Approve Contract
                </h3>
                <div>
                  <p className="text-[#400C8B] font-normal text-[14px] leading-[20px] font-mitr">
                    The public sale will be conducted via USDC. Be sure to
                    collate USDC in your DeFi wallet, and enable the contract
                    before the sale starts.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="hidden lg:flex w-full bg-[#FFBF00] h-0.5 "></div>*/}
          </div>
          <div className="absolute lg:-top-6 -top-16 lg:-left-6 left-0">
            <div
              className="w-[60px] h-[60px] rounded-xl bg-[#C54177] flex items-center justify-center text-white text-4xl font-bold mb-12"
              style={{ border: "3px solid #FFBF00" }}
            >
              1
            </div>
          </div>
        </li>
        <li
          key={2}
          className="relative mb-20 lg:mb-0 custom-li mr-8"
          style={{ listStyle: "none", width: "100%" }}
        >
          <div className="flex items-center">
            <div
              className="mt-3 sm:pr-8 bg-white rounded-3xl  w-full  h-full"
              style={{
                border: "3px solid #C54177",
              }}
            >
              <div className="p-4  ">
                <h3 className="text-[#400C8B] text-[18px] leading-[25px] font-mitr">
                  Commit USDC
                </h3>
                <div>
                  <p className="text-[#400C8B] font-normal text-[14px] leading-[20px] font-mitr">
                    When the Private and Public Sales are live, commit your USDC
                    tokens to buy the token on sale. A classic presale method
                    applies to both sales scenarios: you will receive tokens for
                    your purchase until they are sold out or until the presale
                    period ends. Remember, only Whitelisted Wallets can access
                    the Private Sale!
                  </p>
                </div>
              </div>
            </div>
            {/*           <div className="hidden lg:flex w-full bg-[#FFBF00] h-0.5 "></div>*/}
          </div>
          <div className="absolute lg:-top-6 -top-16 lg:-left-6 left-0">
            <div
              className="w-[60px] h-[60px] rounded-xl bg-[#C54177] flex items-center justify-center text-white text-4xl font-bold mb-12"
              style={{ border: "3px solid #FFBF00" }}
            >
              2
            </div>
          </div>
        </li>
        <li
          key={3}
          className="relative mb-20 lg:mb-0 custom-li"
          style={{ listStyle: "none", width: "100%" }}
        >
          <div className="flex items-center">
            <div
              className="mt-3 sm:pr-8  bg-white rounded-3xl w-full  h-full"
              style={{
                border: "3px solid #C54177",
              }}
            >
              <div className="p-4  ">
                <h3 className="text-[#400C8B] text-[18px] leading-[25px] font-mitr">
                  Claim your tokens
                </h3>
                <div>
                  <p className="text-[#400C8B] font-normal text-[14px] leading-[20px] font-mitr">
                    After the IDO sales is finished, you can claim any $PAPPLE
                    token that you bought. Private Sale Claim: 30% $PAPPLE
                    immediately unlocked, 70% vested over 30 days. Public Sale
                    Claim: 60% $PAPPLE immediately unlocked, 40% vested over 30
                    days. During the vesting period, you can click on CLAIM
                    anytime to obtain the tokens unlocked so far.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute lg:-top-6 -top-16 lg:-left-6 left-0">
            <div
              className="w-[60px] h-[60px] rounded-xl bg-[#C54177] flex items-center justify-center text-white text-4xl font-bold mb-12"
              style={{ border: "3px solid #FFBF00" }}
            >
              3
            </div>
          </div>
        </li>
      </ol>

      {/*Mobile*/}
    </>
  );
};

export default Timeline;

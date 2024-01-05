import React from "react";
import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import { useCountdownTimer } from "../../../hooks/launchpad/useTimer";
import CountdownTimer from "./CountDownTimer";
import LaunchpadButton from "./LaunchpadButton";
import { useLaunchpad } from "../../../hooks/launchpad/useLaunchpad";
import { PiCoinsBold } from "react-icons/pi";
import ConnectWalletButton from "../../../components/ConnectWalletButton";
const PappleLoader: React.FC = () => {
  const spinStyle = {
    animation: "spin 2s linear infinite",
  };
  return (
    <div className="flex items-center justify-center">
      <img
        src="/logo.png"
        alt="Loader"
        style={{
          ...spinStyle,
        }}
      />

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

type ProjectSaleProps = {
  icon: string;
  description: string;
  data: any;
};
const LaunchpadSales: React.FC<ProjectSaleProps> = ({
  data,
  icon,
  description,
}) => {
  const { account } = useActiveWeb3React();
  const {
    launchpad,
    handleClaimPapple,
    totalClaimed,
    totalClaimable,
    allowance,
    handleRefrech,
    pendingRefresh,
    totalClaimableWlPublic,
  } = useLaunchpad({ data, account });

  const { timeLeft: timeWhitelist }: any = useCountdownTimer({
    timestampStart: Date.now(),
    timestampEnd: 1702385654,
  });
  const { timeLeft: timePublic }: any = useCountdownTimer({
    timestampStart: Date.now(),
    timestampEnd: 1702490088,
  });
  const activeClaimButton = true;
  /*  const handlePappleCurrentPrice = async () => {
    const pappleCurrenrPrice = await multicall(
      launchpadABI,
      [
        {
          address: "0xB5D1f9D2A88E53eA8643E30460F71ACFbB79B56f",
          name: "price",
          params: [],
        },
      ],
      5001
    );
    return formatUnits(
      EthersBigNumber.from(pappleCurrenrPrice[0].toString()),
      6
    );
  };*/

  return (
    <div className="py-4 py-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {launchpad.sale.map(
          (sale: any) =>
            (sale.type === "private" || sale.type === "public") &&
            (sale.isUpcoming || sale.isFinished || sale.isLive) && (
              <div
                className={`w-full p-6 rounded-3xl ${
                  pendingRefresh && !sale.isUpcoming ? "opacity-50" : ""
                }`}
                style={{
                  border: "2px solid #BDBDBD",
                  background: "white",
                  position: "relative",
                }}
                key={sale.title}
              >
                {pendingRefresh && !sale.isUpcoming && (
                  <div
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    style={{
                      zIndex: 1000,
                    }}
                  >
                    <PappleLoader />
                  </div>
                )}
                <div className="flex justify-between">
                  <div className="mb-2 text-[20px] leading-[22px] font-mitr font-bold text-[#C54177]">
                    {sale.title}
                  </div>
                  {/*
                  <QuestionHelper
                    text="Routing through these tokens resulted in the best price for your trade."
                    ml="4px"
                    placement="top-start"
                  />*/}
                </div>
                <CountdownTimer
                  time={sale.type === "private" ? timeWhitelist : timePublic}
                />

                <div className="flex items-center mb-4">
                  <img
                    src={`${sale.coinDescription.icon}`}
                    alt="private-sale"
                    className="w-[50px] h-[50px] mr-4"
                  />
                  <div>
                    <div className="text-[#400C8B] font-mitr text-[14px] leading-[20px]">
                      ON SALE
                    </div>
                    <div className="text-[#400C8B] font-mitr text-[18px] leading-[25px]">
                      {sale.coinDescription.tokenAvailable} PAPPLE
                    </div>
                    <div className="text-[#400C8B] font-mitr text-[14px] leading-[20px]">
                      {sale.coinDescription.percentOfTotalSale} % of total sale
                    </div>
                  </div>
                </div>
                {/*   <div className="mb-12">{whitelisted && <LaunchpadButton />}</div>*/}

                <div>
                  {(sale.type === "private" || sale.type === "public") &&
                  !sale.isUpcoming ? (
                    <>
                      {/*       {!account && (
                        <ConnectWalletButton
                          style={{
                            background: "#FFBF00",
                            color: "#400C8B",
                            boxShadow: "none",
                          }}
                        />
                      )}*/}
                      {/*           {sale.isFinished && !sale.totalAmountClaimable ? (
                        <PappleLoader />
                      ) : null}*/}
                      {!account && sale.isLive && (
                        <ConnectWalletButton
                          style={{
                            background: "#FFBF00",
                            color: "#400C8B",
                            boxShadow: "none",
                          }}
                        />
                      )}
                      {/*                      {sale.type === "private" &&
                      !sale.totalCommited &&
                      account ? (
                        <PappleLoader />
                      ) : null}
                      {sale.type === "public" &&
                      account &&
                      !sale.totalCommited ? (
                        <PappleLoader />
                      ) : null}*/}
                      {sale.type === "private" &&
                      sale.whitelisted &&
                      account ? (
                        <div className="mb-12">
                          {" "}
                          <LaunchpadButton
                            isFinished={data.sale.every(
                              (_sale) => _sale.isFinished
                            )}
                            type={sale.type}
                            state={sale.isFinished}
                            usdcSubmitted={sale.usdcSubmitted}
                            totalAmountClaimable={sale.totalAmountClaimable}
                            totalCommited={sale.totalCommited}
                            maxForWallet={sale.maxForWallet}
                            allowance={allowance}
                            handleRefrech={handleRefrech}
                            time={timeWhitelist}
                          />
                        </div>
                      ) : (
                        sale.type === "private" &&
                        sale.whitelisted === false &&
                        sale.isLive &&
                        account && (
                          <div style={{ color: "#C54177" }} className="mb-12">
                            You are not Whitelisted, so you can&rsquo;t commit
                            in the Private Sale
                          </div>
                        )
                      )}
                      {sale.type === "public" && account ? (
                        <div className="mb-12">
                          {" "}
                          <LaunchpadButton
                            isFinished={data.sale.every(
                              (_sale) => _sale.isFinished
                            )}
                            type={sale.type}
                            state={sale.isFinished}
                            usdcSubmitted={sale.usdcSubmitted}
                            totalAmountClaimable={sale.totalAmountClaimable}
                            totalCommited={sale.totalCommited}
                            maxForWallet={sale.maxForWallet}
                            allowance={allowance}
                            handleRefrech={handleRefrech}
                            time={timePublic}
                          />
                        </div>
                      ) : null}
                      <div className="flex justify-between">
                        <span className="text-[#400C8B] font-mitr text-[14px] leading-[20px]">
                          {" "}
                          Total committed:
                        </span>
                        <span>
                          {sale.totalCommited !== null ? (
                            <p className="text-[#400C8B] font-mitr  lg:text-[16px] text-[14px] leading-[22px] font-bold">
                              {" "}
                              {`$ ${parseFloat(
                                sale.totalCommited
                              ).toLocaleString("en-US")}  (${(
                                (parseFloat(sale.totalCommited) /
                                  (sale.type === "private" ? 100000 : 250000)) *
                                100
                              ).toFixed(2)}%)`}
                            </p>
                          ) : (
                            <p className="text-[#400C8B] font-mitr  lg:text-[16px] text-[14px] leading-[22px] font-bold">
                              Loading...
                            </p>
                          )}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="mb-2 text-[20px] leading-[22px] font-mitr font-bold text-[#C54177] justify-center flex">
                      Coming Soon
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[#400C8B] font-mitr text-[14px] leading-[20px]">
                      {" "}
                      Founds to raise:{" "}
                    </span>
                    <span className="text-[#400C8B] font-mitr lg:text-[16px] text-[14px]  leading-[22px] font-bold">
                      $ {sale.foundToRaise} USD
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#400C8B] font-mitr text-[14px] leading-[20px]">
                      Price per $PAPPLE:
                    </span>
                    <span className="text-[#400C8B] font-mitr lg:text-[16px] text-[14px]  leading-[22px] font-bold">
                      $ {sale.salePrice}
                    </span>
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      {/*  {data.isFinished && !totalClaimed && !totalClaimable && (
        <div className="flex justify-center mt-4">
          <button
            className="w-fit h-[48px] bg-[#FFBF00] font-mitr rounded-[16px] text-[#400C8B] text-[16px] px-[24px] mb-4 flex items-center"
            style={{ fontWeight: "600" }}
            onClick={handleClaimPapple}
          >
            ...Loading
            <PiCoinsBold className="ml-2 text-xl" />
          </button>
        </div>
      )}*/}

      {data.sale.every((sale) => sale.isFinished) && account && (
        <div className="mt-4">
          <div className="flex justify-center mb-2 font-mitr font-bold text-[#400C8B]">
            Total Claimable:{" "}
            {parseFloat(totalClaimableWlPublic).toLocaleString("en-US")} $PAPPLE
          </div>
          <div className=" flex justify-center mb-2 font-mitr font-bold text-[#400C8B] ">
            Still to be Claimed:{" "}
            {parseFloat(totalClaimable).toLocaleString("en-US")} $PAPPLE
          </div>
        </div>
      )}

      {data.sale.every((sale) => sale.isFinished) &&
        totalClaimable !== 0 &&
        totalClaimable !== null &&
        account &&
        (activeClaimButton ? (
          <div className="flex justify-center mt-4">
            <button
              className="w-fit h-[48px] bg-[#FFBF00] font-mitr rounded-[16px] text-[#400C8B] text-[16px] px-[24px] mb-4 flex items-center"
              style={{ fontWeight: "600" }}
              onClick={handleClaimPapple}
            >
              Claim $PAPPLE
              <PiCoinsBold className="ml-2 text-xl" />
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-4 ">
            <button
              className="w-fit h-[48px] bg-[#4F4F4F] font-mitr rounded-[16px] text-[#BDBDBD] text-[16px] px-[24px] mb-4 cursor-not-allowed flex items-center relative group"
              style={{ fontWeight: "600" }}
            >
              Claim $PAPPLE
              <PiCoinsBold className="ml-2 text-xl" />
              <span className="opacity-0 group-hover:opacity-100 bg-[#4F4F4F] text-[#FFBF00] text-xs py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 transition duration-300">
                Coming Soon
              </span>
            </button>
          </div>
        ))}
      {data.sale.every((sale) => sale.isFinished) &&
        totalClaimed !== null &&
        totalClaimable !== null &&
        totalClaimable === 0 && (
          <div className="flex justify-center mt-4">
            <button
              className="w-fit h-[48px] bg-[#4F4F4F] font-mitr rounded-[16px] text-[#BDBDBD] text-[16px] px-[24px] mb-4 cursor-not-allowed flex items-center"
              style={{ fontWeight: "600" }}
            >
              Already Claimed
              <PiCoinsBold className="ml-2 text-xl" />
            </button>
          </div>
        )}

      {data.sale.every((sale) => sale.isFinished) &&
        totalClaimed === null &&
        totalClaimable === null && (
          <div>
            <PappleLoader />
          </div>
        )}

      {data.sale.every((sale) => sale.isFinished) && !account && (
        <div className="flex justify-center mt-4">
          <ConnectWalletButton
            style={{
              background: "#FFBF00",
              color: "#400C8B",
              boxShadow: "none",
            }}
          />
        </div>
      )}

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex items-center lg:justify-start justify-center">
          {icon}
        </div>
        <div className="w-full lg:text-[#400C8B] text-white  text-[14px] leading-[20px] font-mitr">
          {description}
        </div>
      </div>
    </div>
  );
};

export default LaunchpadSales;

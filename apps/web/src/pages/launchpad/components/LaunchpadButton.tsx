import React from "react";
import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import { useCallWithGasPrice } from "../../../hooks/useCallWithGasPrice";
import useCatchTxError from "../../../hooks/useCatchTxError";
import { useToast } from "@pancakeswap/uikit";
import { useERC20, useLaunchpad } from "../../../hooks/useContract";
import { ToastDescriptionWithTx } from "../../../components/Toast";
import multicall from "../../../utils/multicall";
import erc20ABI from "../../../config/abi/erc20.json";
import { formatUnits } from "@ethersproject/units";
import { BigNumber as EthersBigNumber } from "@ethersproject/bignumber/lib/bignumber";

type LaunchpadButtonProps = {
  isFinished: boolean;
  type: string;
  usdcSubmitted: any;
  totalAmountClaimable: any;
  state: any;
  totalCommited: any;
  maxForWallet: string;
  allowance: any;
  handleRefrech: any;
  time: any;
};

const LaunchpadButton: React.FC<LaunchpadButtonProps> = ({
  isFinished,
  type,
  usdcSubmitted,
  totalAmountClaimable,
  state,
  totalCommited,
  maxForWallet,
  allowance,
  handleRefrech,
  time,
}) => {
  const { account } = useActiveWeb3React();
  const [active, setActive] = React.useState(false);
  const [usdcAmount, setUsdcAmount] = React.useState<any>(null);
  const { callWithGasPrice } = useCallWithGasPrice();
  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError();
  const { toastSuccess } = useToast();
  const launchpadContract = useLaunchpad();
  const raisingTokenContract = useERC20(
    "0x6f971137752b3ed21c23fef40fa51adcdc837028"
  );
  const spenderAddress = "0x295c6Fe282AC747F7a2Ee8784f9b58AF0E32bdC9";
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [allowanceApproved, setAllowanceApproved] = React.useState<any>(0);
  const handleApprove = async () => {
    const receipt = await fetchWithCatchTxError(() => {
      return callWithGasPrice(
        raisingTokenContract,
        "approve",
        [spenderAddress, usdcAmount * 1e6],
        { gasLimit: 500000 }
      );
    });
    setActive(!!receipt?.status);
    if (receipt?.status) {
      toastSuccess(
        "Contract Enabled",
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          success
        </ToastDescriptionWithTx>
      );
      const allowanceApproved = await multicall(
        erc20ABI,
        [
          {
            address: "0x6f971137752b3ed21c23fef40fa51adcdc837028",
            name: "allowance",
            params: [account, spenderAddress],
          },
        ],
        5001
      );
      setAllowanceApproved(
        parseFloat(
          formatUnits(EthersBigNumber.from(allowanceApproved[0].toString()), 6)
        )
      );
    }
  };
  const handleBuyTokens = async () => {
    const receipt = await fetchWithCatchTxError(() => {
      return callWithGasPrice(
        launchpadContract,
        "buyTokens",
        [usdcAmount * 1e6],
        { gasLimit: 500000 }
      );
    });

    if (receipt?.status) {
      toastSuccess(
        "Contract Enabled",
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          success
        </ToastDescriptionWithTx>
      );
      setAllowanceApproved(0);
      handleRefrech();
    }
    setUsdcAmount("");
    setActive(false);
  };

  /*
  if (!account)
    return (
      <ConnectWalletButton
        style={{
          background: "#FFBF00",
          color: "#400C8B",
          boxShadow: "none",
        }}
      />
    );
*/

  const isSubmitEnabled = allowance > 0;
  const isApproveEnabled =
    allowanceApproved > 0
      ? parseFloat(usdcAmount === "" || usdcAmount === null ? 0 : usdcAmount) <=
        parseFloat(allowanceApproved)
      : true;

  return (
    <>
      <div className="p-4 rounded-2xl bg-[#F7F7F7]">
        {((type === "private" &&
          (time.days !== 0 ||
            time.hours !== 0 ||
            time.minutes !== 0 ||
            time.seconds !== 0)) ||
          (type === "public" &&
            (time.days !== 0 ||
              time.hours !== 0 ||
              time.minutes !== 0 ||
              time.seconds !== 0))) &&
          !state &&
          account && (
            <div className="flex items-center p-4 w-full  bg-[#F7F7F7] rounded-lg">
              <div className="w-full relative">
                <label className="absolute -mt-6  text-[#C54177]  text-[12px] leading-[18px] font-mitr py-2.5">
                  Submit USDC
                </label>
                <input
                  type="text"
                  className="bg-[#F7F7F7] text-[#400C8B] text-[16px] leading-[22px] font-mitr text-sm rounded-lg outline-none focus:outline-none block w-full p-2.5"
                  value={usdcAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    // Utilisez une expression régulière pour supprimer les caractères non numériques
                    const sanitizedValue = e.target.value.replace(/\D/g, "");
                    // Mettez à jour l'état avec la valeur numérique

                    if (allowanceApproved > 0) {
                      if (parseFloat(sanitizedValue) > allowanceApproved)
                        setErrorMessage(
                          `The amount entered exceeds the maximum you have approved before. Submit (${allowanceApproved}).`
                        );
                      else setErrorMessage(null); // Aucune condition d'erreur
                    } else if (isSubmitEnabled && !active) {
                      if (parseFloat(sanitizedValue) > allowance)
                        setErrorMessage(
                          "The amount entered exceeds the maximum you have approved. Please approve more USDC."
                        );
                      else setErrorMessage(null); // Aucune condition d'erreur
                    } else if (type === "private") {
                      if (parseFloat(sanitizedValue) > 10000)
                        setErrorMessage(
                          "Entered amount exceeds the maximum allowed for private sale (10,000 USDC)"
                        );
                      else if (
                        parseFloat(usdcSubmitted) + parseFloat(sanitizedValue) >
                        10000
                      )
                        setErrorMessage(
                          "Entered amount exceeds the maximum allowed for private sale (10,000 USDC)"
                        );
                      else if (
                        parseFloat(totalCommited) + parseFloat(sanitizedValue) >
                        100000
                      )
                        setErrorMessage(
                          "Entered amount exceeds the maximum allowed for private in total (100,000 USDC)"
                        );
                      else setErrorMessage(null); // Aucune condition d'erreur
                    } else if (type === "public") {
                      if (parseFloat(sanitizedValue) > 250000)
                        setErrorMessage(
                          "Entered amount exceeds the maximum allowed for public sale (250,000 USDC)"
                        );
                      else if (
                        parseFloat(totalCommited) + parseFloat(sanitizedValue) >
                        250000
                      )
                        setErrorMessage(
                          "Entered amount +  total commited exceeds the maximum allowed for public sale (250,000 USDC)"
                        );
                      else setErrorMessage(null); // Aucune condition d'erreur
                    } else {
                      setErrorMessage(null); // Aucune condition d'erreur
                    }
                    setUsdcAmount(sanitizedValue);
                  }}
                  placeholder="Enter USDC amount"
                  required
                />
              </div>
              {(type === "private" && parseFloat(totalCommited) === 100000) ||
              (type === "public" && parseFloat(totalCommited) === 250000) ? (
                <button className="w-fit h-[48px] rounded-[16px] text-[16px] px-[24px] bg-[#4F4F4F] text-[#BDBDBD] cursor-not-allowed">
                  Sold Out
                </button>
              ) : (
                <button
                  className={`w-fit h-[48px] rounded-[16px] text-[16px] px-[24px] ${
                    parseFloat(
                      usdcAmount === "" || usdcAmount === null ? 0 : usdcAmount
                    ) !== 0 &&
                    isApproveEnabled &&
                    ((type === "private" &&
                      parseFloat(
                        usdcAmount === "" || usdcAmount === null
                          ? 0
                          : usdcAmount
                      ) <= 10000 &&
                      parseFloat(usdcSubmitted) +
                        parseFloat(
                          usdcAmount === "" || usdcAmount === null
                            ? 0
                            : usdcAmount
                        ) <=
                        10000 &&
                      parseFloat(totalCommited) +
                        parseFloat(
                          usdcAmount === "" || usdcAmount === null
                            ? 0
                            : usdcAmount
                        ) <=
                        100000) ||
                      (type === "public" &&
                        parseFloat(
                          usdcAmount === "" || usdcAmount === null
                            ? 0
                            : usdcAmount
                        ) <= 250000 &&
                        parseFloat(totalCommited) +
                          parseFloat(
                            usdcAmount === "" || usdcAmount === null
                              ? 0
                              : usdcAmount
                          ) <=
                          250000))
                      ? "bg-[#FFBF00] text-[#400C8B]"
                      : "bg-[#4F4F4F] text-[#BDBDBD] cursor-not-allowed"
                  }`}
                  style={{ fontWeight: "600" }}
                  onClick={() => {
                    if (isSubmitEnabled && !active) {
                      if (
                        parseFloat(
                          usdcAmount === "" || usdcAmount === null
                            ? 0
                            : usdcAmount
                        ) <= allowance
                      ) {
                        handleBuyTokens();
                      } else {
                        handleApprove();
                      }
                    } else if (!active) {
                      handleApprove();
                    } else {
                      handleBuyTokens();
                    }
                  }}
                  disabled={
                    parseFloat(
                      usdcAmount === "" || usdcAmount === null ? 0 : usdcAmount
                    ) !== 0 &&
                    ((type === "private" &&
                      parseFloat(
                        usdcAmount === "" || usdcAmount === null
                          ? 0
                          : usdcAmount
                      ) > 0 &&
                      parseFloat(
                        usdcAmount === "" || usdcAmount === null
                          ? 0
                          : usdcAmount
                      ) <= 10000 &&
                      parseFloat(usdcSubmitted) +
                        parseFloat(
                          usdcAmount === "" || usdcAmount === null
                            ? 0
                            : usdcAmount
                        ) <=
                        10000 &&
                      parseFloat(totalCommited) +
                        parseFloat(
                          usdcAmount === "" || usdcAmount === null
                            ? 0
                            : usdcAmount
                        ) <=
                        100000) ||
                      (type === "public" &&
                        parseFloat(
                          usdcAmount === "" || usdcAmount === null
                            ? 0
                            : usdcAmount
                        ) > 0 &&
                        parseFloat(
                          usdcAmount === "" || usdcAmount === null
                            ? 0
                            : usdcAmount
                        ) <= 250000 &&
                        parseFloat(totalCommited) +
                          parseFloat(
                            usdcAmount === "" || usdcAmount === null
                              ? 0
                              : usdcAmount
                          ) <=
                          250000))
                      ? false
                      : true
                  }
                >
                  {isSubmitEnabled && !active
                    ? parseFloat(
                        usdcAmount === "" || usdcAmount === null
                          ? 0
                          : usdcAmount
                      ) <= allowance
                      ? "Submit"
                      : "Approve USDC"
                    : !active
                    ? "Approve USDC"
                    : "Submit"}
                </button>
              )}
            </div>
          )}

        {/*        <button
          className="w-fit h-[48px] bg-[#4F4F4F] font-mitr rounded-[16px] text-[#BDBDBD] text-[16px] px-[24px] mb-4 cursor-not-allowed flex items-center"
          style={{ fontWeight: "600" }}
        >
          Already Claimed
          <PiCoinsBold className="ml-2 text-xl" />
        </button>*/}
        {errorMessage && (
          <div className="text-[#C54177]  text-[12px] leading-[18px] font-mitr mb-2">
            {errorMessage}
          </div>
        )}
        <div>
          <div className="flex justify-between">
            <span className="text-[#400C8B] font-mitr text-[14px] leading-[20px]">
              {" "}
              Max for Wallet:
            </span>
            <span className="text-[#400C8B] font-mitr lg:text-[16px] text-[14px] leading-[22px] font-bold">
              {maxForWallet}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#400C8B] font-mitr text-[14px] leading-[20px]">
              Total Amount Claimable:
            </span>
            <span className="text-[#400C8B] font-mitr lg:text-[16px] text-[14px] leading-[22px] font-bold">
              {parseFloat(totalAmountClaimable).toLocaleString("en-US")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#400C8B] font-mitr text-[14px] leading-[20px]">
              USDC Submitted
            </span>
            <span>
              {usdcSubmitted !== null ? (
                <p className="text-[#400C8B] font-mitr lg:text-[16px] text-[14px] leading-[22px] font-bold">
                  {`${parseFloat(usdcSubmitted).toLocaleString("en-US")} USDC`}
                </p>
              ) : (
                <p className="text-[#400C8B] font-mitr lg:text-[16px] text-[14px] leading-[22px] font-bold">
                  Loading...
                </p>
              )}
            </span>
          </div>
          <div className="w-full bg-[#E0E0E0] rounded-full h-2.5">
            <div
              className="bg-[#794BCC] h-2.5 rounded-full"
              style={{
                width: `${
                  (usdcSubmitted / (type === "private" ? 10000 : 250000)) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchpadButton;

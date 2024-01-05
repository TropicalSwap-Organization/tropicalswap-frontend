import React from "react";
import multicall from "../../utils/multicall";
import launchpadABI from "../../config/abi/launchpadAbi.json";
import { formatUnits } from "@ethersproject/units";
import { BigNumber as EthersBigNumber } from "@ethersproject/bignumber/lib/bignumber";
import { useCallWithGasPrice } from "../useCallWithGasPrice";
import useCatchTxError from "../useCatchTxError";
import { useToast } from "@pancakeswap/uikit";
import { useERC20, useLaunchpad as useLaunhpadContract } from "../useContract";
import { ToastDescriptionWithTx } from "../../components/Toast";
import addresses from "../../config/constants/contracts";
import { getAddress } from "../../utils/addressHelpers";
import { useActiveChainId } from "../useActiveChainId";
import erc20ABI from "../../config/abi/erc20.json";

export const useLaunchpad = ({ data, account }) => {
  const { chainId } = useActiveChainId();
  const [launchpad, setLaunchpad] = React.useState<any>(data);
  const { callWithGasPrice } = useCallWithGasPrice();
  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError();
  const { toastSuccess } = useToast();
  const launchpadContract = useLaunhpadContract();
  const [totalClaimed, setTotalClaimed] = React.useState<any>(null);
  const [totalClaimable, setTotalClaimable] = React.useState<any>(null);
  const [allowance, setAllowance] = React.useState<any>(null);
  const [pendingRefresh, setPendingRefresh] = React.useState(false);
  const [totalClaimableWlPublic, setTotalClaimableWlPublic] =
    React.useState(null);

  const loadContractData = React.useCallback(() => {
    (async () => {
      try {
        // Set pending refresh to true when starting the refresh
        setPendingRefresh(true);
        const totalUsdcRaised = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "totalUsdcRaisedPublic",
              params: [],
            },
          ],
          5001
        );

        const totalUsdcRaisedWL = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "totalUsdcRaisedWL",
              params: [],
            },
          ],
          5001
        );

        setLaunchpad((prevData) => ({
          ...prevData,
          sale: prevData.sale.map((saleItem) => ({
            ...saleItem,
            totalCommited:
              saleItem.type === "public"
                ? formatUnits(
                    EthersBigNumber.from(totalUsdcRaised[0].toString()),
                    6
                  )
                : formatUnits(
                    EthersBigNumber.from(totalUsdcRaisedWL[0].toString()),
                    6
                  ),
          })),
        }));
        if (!account) return;
        setPendingRefresh(true);

        const usdcSubmitted = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "addressToUsdcFunded",
              params: [account],
            },
          ],
          5001
        );

        const usdcSubmittedWL = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "addressTo_WL_UsdcFunded",
              /*            name: "addressToUsdcFunded",*/
              params: [account],
            },
          ],
          5001
        );

        const papplepurchasedWL = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "addressTo_WL_PapplePurchased",
              params: [account],
            },
          ],
          5001
        );

        const papplepurchased = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "addressToPapplePurchased",
              params: [account],
            },
          ],
          5001
        );

        const vaultClaimWl = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "vault_claimWL",
              params: [account],
            },
          ],
          5001
        );

        const vaultClaim = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "vault_claimPublic",
              params: [account],
            },
          ],
          5001
        );

        const TotalClaimableWlPublic = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "addressToPappleTotalPurchased",
              params: [account],
            },
          ],
          5001
        );
        setTotalClaimableWlPublic(
          formatUnits(
            EthersBigNumber.from(TotalClaimableWlPublic[0].toString()),
            18
          )
        );

        const isWhitelist = await multicall(
          launchpadABI,
          [
            {
              address: getAddress(addresses.launchpad, chainId),
              name: "whitelist",
              params: [account],
            },
          ],
          5001
        );

        const allowance = await multicall(
          erc20ABI,
          [
            {
              address: "0x6f971137752b3ed21c23fef40fa51adcdc837028",
              name: "allowance",
              params: [account, getAddress(addresses.launchpad, chainId)],
            },
          ],
          5001
        );

        parseFloat(
          formatUnits(EthersBigNumber.from(papplepurchased[0].toString()), 18)
        ) +
          parseFloat(
            formatUnits(
              EthersBigNumber.from(papplepurchasedWL[0].toString()),
              18
            )
          );

        setAllowance(
          parseFloat(
            formatUnits(EthersBigNumber.from(allowance[0].toString()), 6)
          )
        );

        setTotalClaimed(
          parseFloat(
            formatUnits(
              EthersBigNumber.from(vaultClaim[0].totalClaimed.toString()),
              18
            )
          ) +
            parseFloat(
              formatUnits(
                EthersBigNumber.from(vaultClaimWl[0].totalClaimed.toString()),
                18
              )
            )
        );

        setTotalClaimable(
          parseFloat(
            formatUnits(EthersBigNumber.from(papplepurchased[0].toString()), 18)
          ) +
            parseFloat(
              formatUnits(
                EthersBigNumber.from(papplepurchasedWL[0].toString()),
                18
              )
            )
        );

        setLaunchpad((prevData) => ({
          ...prevData,
          sale: prevData.sale.map((saleItem) => ({
            ...saleItem,
            whitelisted: saleItem.type === "private" && isWhitelist[0][0],
            /*            totalCommited:
              saleItem.type === "public"
                ? formatUnits(
                    EthersBigNumber.from(totalUsdcRaised[0].toString()),
                    6
                  )
                : formatUnits(
                    EthersBigNumber.from(totalUsdcRaisedWL[0].toString()),
                    6
                  ),*/
            usdcSubmitted:
              saleItem.type === "public"
                ? formatUnits(
                    EthersBigNumber.from(usdcSubmitted[0].toString()),
                    6
                  )
                : formatUnits(
                    EthersBigNumber.from(usdcSubmittedWL[0].toString()),
                    6
                  ),
            totalAmountClaimable:
              saleItem.type === "public"
                ? formatUnits(
                    EthersBigNumber.from(papplepurchased[0].toString()),
                    18
                  )
                : formatUnits(
                    EthersBigNumber.from(papplepurchasedWL[0].toString()),
                    18
                  ),
          })),
        }));
      } finally {
        // Set pending refresh to false when refresh is complete, even if there's an error
        setPendingRefresh(false);
      }
    })();
  }, [account]);

  React.useEffect(() => {
    loadContractData();
  }, [loadContractData]);

  const handleClaimPapple = async () => {
    const receipt = await fetchWithCatchTxError(() => {
      return callWithGasPrice(launchpadContract, "claimPapple", []);
    });
    if (receipt?.status) {
      loadContractData();
      toastSuccess(
        "Contract Enabled",
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          success
        </ToastDescriptionWithTx>
      );
    }
  };

  const handleRefrech = async () => {
    loadContractData();
  };

  return {
    launchpad,
    allowance,
    handleClaimPapple,
    totalClaimed,
    totalClaimable,
    handleRefrech,
    pendingRefresh,
    totalClaimableWlPublic,
  };
};

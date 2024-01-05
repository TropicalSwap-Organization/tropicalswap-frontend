import React from "react";
import LaunchpadDescription from "../components/LaunchpadDescription";
import LaunchpadContext from "../components/LaunchpadContext";
import IconList from "../components/IconList";

const launchpadDefaultData: any = [
  {
    projectName: "TropicalSwap",
    color: "#794BCC",
    iconList: <IconList />,
    projectDescription:
      "TropicalSwap aims to become the leading DEX on the Mantle Chain,\n" +
      "          offering a comprehensive ecosystem that is consistently transparent,\n" +
      "          intuitive, and user-friendly. $PAPPLE is the core of TropicalSwap,\n" +
      "          empowering users with a wide array of utilities.",
    isFinished: false,
    isUpcoming: false,
    isLive: false,
    sale: [
      {
        type: "private",
        title: "Private Sale",
        isFinished: false,
        isUpcoming: false,
        isLive: false,
        coinDescription: {
          tokenAvailable: "400,000",
          percentOfTotalSale: "50",
          icon: "/images/tokens/tropilcalswap-token.png",
        },
        maxForWallet: "10,000",
        totalAmountClaimable: null,
        usdcSubmitted: null,
        totalCommited: null,
        foundToRaise: "100,000",
        salePrice: "0.25",
      },
      {
        type: "public",
        title: "Public Sale",
        isFinished: false,
        isUpcoming: true,
        isLive: false,
        coinDescription: {
          tokenAvailable: "500,000",
          percentOfTotalSale: "50",
          icon: "/images/tokens/tropilcalswap-token.png",
        },
        maxForWallet: "Unlimited",
        totalAmountClaimable: null,
        usdcSubmitted: null,
        totalCommited: null,
        foundToRaise: "250,000",
        salePrice: "0.50",
      },
    ],
  },
];

const LaunchpadUpcoming: React.FC = () => {
  return (
    <div className="p-0 lg:p-[60px]">
      <div className="flex justify-center flex-col items-center">
        <LaunchpadContext launchpadData={launchpadDefaultData} />
        <LaunchpadDescription />
      </div>
    </div>
  );
};

export default LaunchpadUpcoming;

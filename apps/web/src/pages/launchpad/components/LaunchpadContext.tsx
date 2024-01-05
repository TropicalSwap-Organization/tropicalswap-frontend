import React from "react";
import Page from "../../../components/Layout/Page";
import {
  ButtonMenu,
  ButtonMenuItem,
  Flex,
  NextLinkFromReactRouter,
  NotificationDot,
  Text,
} from "@pancakeswap/uikit";
import ProjectAccordion from "./ProjectAccordion";
import IconList from "./IconList";
import { useTranslation } from "@pancakeswap/localization";
import LaunchpadSales from "./LaunchpadSale";
import { useRouter } from "next/router";
interface LaunchpadContextProps {
  launchpadData: any; // Replace with the actual type definition
}
const LaunchpadContext: React.FC<LaunchpadContextProps> = ({
  launchpadData,
}) => {
  const { t } = useTranslation();

  const currentPath = window.location.pathname;

  // Retrieve the launchpad data based on the currentPath

  const router = useRouter();

  let activeIndex: number;
  switch (router.pathname) {
    case "/launchpad/upcoming":
      activeIndex = 0;
      break;
    case "/live":
      activeIndex = 1;
      break;
    case "/launchpad/history":
      activeIndex = 2;
      break;
    default:
      activeIndex = 1;
      break;
  }

  return (
    <div className="mb-20 w-full max-w-[1200px] lg:bg-white rounded-[24px]">
      <div className="relative w-full p-10 bg-[#C54177] rounded-t-[24px] lg:block hidden">
        <div className="w-60 h-16 font-mitr rounded-full bg-[#FFBF00] flex items-center justify-center text-[#400C8B] text-4xl font-bold mb-4">
          Launchpad
        </div>
        <div className="text-white">
          Buy new tokens launching on Mantle chain.
        </div>
        <img
          className="absolute w-32 h-32  -bottom-10 right-32 z-10"
          src="/images/launchpad-header.png"
          alt="swap-header"
        />
        <img
          className="absolute w-[11rem] h-[14rem]  -bottom-2 right-64 z-10"
          src="/images/launchpad-header1.png"
          alt="swap-header"
        />
      </div>
      <Page>
        <div className="flex justify-end">
          <Flex
            width="max-content"
            flexDirection="column"
            className="lg:mb-8 mb-8"
          >
            <Text
              textTransform="uppercase"
              color="#400C8B"
              style={{ color: "#794BCC" }}
              fontSize="12px"
              bold
              className="lg:block hidden"
            >
              {t("Filter by")}
            </Text>
            <ButtonMenu
              /*            style={{ border: "none" }}*/

              activeIndex={activeIndex}
              scale="sm"
              variant="subtle"
            >
              <NotificationDot show={false}>
                <ButtonMenuItem
                  as={NextLinkFromReactRouter}
                  /*    style={{ color: activeIndex ? "#794BCC" : "white" }}*/
                  to="/launchpad/upcoming"
                  id="upcoming-launchpad-button"
                >
                  {t("Upcoming")}
                </ButtonMenuItem>
              </NotificationDot>
              <ButtonMenuItem
                as={NextLinkFromReactRouter}
                /*        style={{ color: activeIndex ? "white" : "#794BCC" }}*/
                to="/launchpad"
                id="live-launchpad-button"
              >
                {t("Live")}
              </ButtonMenuItem>
              <NotificationDot show={false}>
                <ButtonMenuItem
                  as={NextLinkFromReactRouter}
                  /*        style={{ color: activeIndex ? "white" : "#794BCC" }}*/
                  to="/launchpad/history"
                  id="finished-launchpad-button"
                >
                  {t("Finished")}
                </ButtonMenuItem>
              </NotificationDot>
            </ButtonMenu>
          </Flex>
        </div>
        {/* <ProjectAccordion children={<LaunchpadSales />} /> */}
        {launchpadData.map((data) => {
          if (currentPath === "/launchpad/history" && !data.isFinished)
            return (
              <div className="flex justify-center" key={data.projectName}>
                <div className="font-mitr text-[#DA447B] text-[30px] leading-[35px]">
                  No launches history are active at this time!{" "}
                </div>
              </div>
            );
          if (currentPath === "/launchpad/upcoming" && !data.isUpcoming)
            return (
              <div className="flex justify-center" key={data.projectName}>
                <div className="font-mitr text-[#DA447B] text-[30px] leading-[35px]">
                  No launches upcoming are active at this time!{" "}
                </div>
              </div>
            );
          if (currentPath === "/launchpad" && !data.isLive)
            return (
              <div className="flex justify-center" key={data.projectName}>
                <div className="font-mitr text-[#DA447B] text-[30px] leading-[35px]">
                  No launches are active at this time!{" "}
                </div>
              </div>
            );
          return (
            <ProjectAccordion
              title={data.projectName}
              color={data.color}
              key={data.title}
            >
              <LaunchpadSales
                data={data}
                icon={data.iconList}
                description={data.projectDescription}
              />
            </ProjectAccordion>
          );
        })}
      </Page>
    </div>
  );
};

export default LaunchpadContext;

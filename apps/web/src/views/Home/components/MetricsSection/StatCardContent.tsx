import { Heading, Flex, Text, useMatchBreakpoints } from "@pancakeswap/uikit";

const StatCardContent: React.FC<
  React.PropsWithChildren<{
    headingText: string;
    bodyText: string;
    highlightColor: string;
  }>
> = ({ headingText, bodyText, highlightColor }) => {
  const { isMobile, isTablet } = useMatchBreakpoints();
  const isSmallerScreen = isMobile || isTablet;
  const split = headingText.split(" ");
  const lastWord = split.pop();
  const remainingWords = split.slice(0, split.length).join(" ");

  return (
    <Flex
      minHeight={[null, null, null, "168px"]}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, "64px"]}
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <div className="text-[#C54177] font-mitr font-bold lg:mb-10 mb-4 text-3xl">
          {remainingWords}
        </div>
      ) : (
        /* <Heading color="#C54177" mb="24px" scale="lg">{remainingWords}</Heading>*/
        <div className="text-[#C54177] font-mitr font-bold lg:mb-10 mb-4 text-3xl">
          {remainingWords}
        </div>
        /*<Heading color="#C54177" mb="24px" scale="xl">{remainingWords}</Heading>*/
      )}
      {/* <Heading color="#C54177" scale="xl" mb="24px">
        {lastWord}
      </Heading> */}
      {/*<Text color="#400C8B">{bodyText}</Text>*/}
      <div className="text-[#400C8B] font-mitr">{bodyText}</div>
    </Flex>
  );
};

export default StatCardContent;

import { ButtonProps, IconButton } from "../../components/Button";
import { ArrowDownIcon, ArrowUpDownIcon } from "../../components/Svg";
import { switchButtonClass, iconDownClass, iconUpDownClass } from "./SwapWidget.css";
import { CurrencyInputPanel } from "./CurrencyInputPanel";
import { CurrencyInputHeader, CurrencyInputHeaderSubTitle, CurrencyInputHeaderTitle } from "./CurrencyInputHeader";
import { SwapPage } from "./Page";
import { SwapFooter } from "./Footer";
import { SwapInfo, SwapInfoLabel } from "./SwapInfo";
import { TradePrice } from "./TradePrice";

const SwapSwitchButton = (props: ButtonProps) => (
  <IconButton className={switchButtonClass} variant="light" scale="sm" {...props} style={{ background: "white" }}>
    <ArrowDownIcon className={iconDownClass} color="#400C8B" />
    <ArrowUpDownIcon className={iconUpDownClass} color="#400C8B" />
  </IconButton>
);

const Swap = {
  SwitchButton: SwapSwitchButton,
  CurrencyInputHeaderTitle,
  CurrencyInputHeaderSubTitle,
  CurrencyInputHeader,
  CurrencyInputPanel,
  Page: SwapPage,
  Footer: SwapFooter,
  Info: SwapInfo,
  InfoLabel: SwapInfoLabel,
  TradePrice
};

export { Swap };

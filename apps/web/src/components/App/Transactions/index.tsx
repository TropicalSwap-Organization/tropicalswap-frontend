import { HistoryIcon, useModal, IconButton } from "@pancakeswap/uikit";
import TransactionsModal from "./TransactionsModal";

const Transactions = () => {
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />);
  return (
    <>
      <IconButton
        scale="sm"
        variant="text"
        onClick={onPresentTransactionsModal}
      >
        <HistoryIcon color="#DA447B" width="24px" />
      </IconButton>
    </>
  );
};

export default Transactions;

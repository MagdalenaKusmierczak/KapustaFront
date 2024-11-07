import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBalance } from "../../../../redux/transactions/operations";
import EntryModal from "../../../Modals/EntryModal/EntryModal";
import BalanceModal from "../../../Modals/BalanceModal/BalanceModal";
import {
  BalanceForm,
  BalanceBox,
  BalanceText,
  BalanceInput,
  BalanceButton,
} from "./BalanceBarReport.styled";

const BalanceBarReport = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [balance, setBalance] = useState("");

  const form = useRef();

  const stateBalance = useSelector((state) => state.transactions.newBalance);

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const onClick = () => {
    dispatch(updateBalance({ newBalance: balance }));
    form.current.reset();
    setBalance("");
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <BalanceForm onSubmit={handleSubmit} ref={form}>
        <BalanceText id="balance">Balance:</BalanceText>
        <BalanceBox>
          <BalanceInput
            id="balance"
            name="balance"
            type="number"
            pattern="[0-9, .UAH]*"
            placeholder={`${stateBalance ?? 0}.00 UAH`}
            value={balance}
            required
            onChange={(e) => setBalance(e.target.value)}
          />
          <BalanceButton
            type="submit"
            onClick={handleModalOpen}
            disabled={!balance}
          >
            CONFIRM
          </BalanceButton>
        </BalanceBox>
        {!stateBalance && <EntryModal />}
      </BalanceForm>
      {modalOpen && (
        <BalanceModal
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={onClick}
          text="SURE"
          balance={stateBalance}
        >
          {" "}
          Are you sure?
        </BalanceModal>
      )}
    </>
  );
};

export default BalanceBarReport;

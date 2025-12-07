import { useState, useRef, useEffect, type ComponentType, type FormHTMLAttributes, type InputHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { updateBalance } from "../../../redux/transactions/operations";
import { Modal } from "../../Modals/Modal";

export interface BalanceBarStyledComponents {
  BalanceForm: ComponentType<FormHTMLAttributes<HTMLFormElement> & { ref?: React.Ref<HTMLFormElement> }>;
  BalanceBox: ComponentType<any>;
  BalanceText: ComponentType<any>;
  BalanceInput: ComponentType<InputHTMLAttributes<HTMLInputElement>>;
  BalanceButton: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
}

interface BalanceBarProps {
  styledComponents: BalanceBarStyledComponents;
}

const BalanceBar = ({ styledComponents }: BalanceBarProps) => {
  const { BalanceForm, BalanceBox, BalanceText, BalanceInput, BalanceButton } = styledComponents;
  
  const [modalOpen, setModalOpen] = useState(false);
  const [entryModalOpen, setEntryModalOpen] = useState(true);
  const [balance, setBalance] = useState("");

  const form = useRef<HTMLFormElement>(null);
  const location = useLocation();
  const isReports = location.pathname === "/reports";

  const stateBalance = useSelector((state: RootState) => state.transactions.newBalance);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (entryModalOpen) {
      document.body.classList.add("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [entryModalOpen]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (balance) {
      setModalOpen(true);
    }
  };

  const handleConfirm = () => {
    dispatch(updateBalance({ newBalance: balance }));
    form.current?.reset();
    setBalance("");
    setModalOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleEntryModalClose = () => {
    setEntryModalOpen(false);
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBalance(e.target.value)}
          />
          <BalanceButton
            type="submit"
            disabled={!balance}
          >
            CONFIRM
          </BalanceButton>
        </BalanceBox>
        {!stateBalance && entryModalOpen && (
          <Modal
            variant={isReports ? "information-reports" : "information"}
            onClose={handleEntryModalClose}
            showCloseButton={false}
          >
            <h2>Hello! To get started, enter the current balance of your account!</h2>
            <p>You can't spend money until you have it</p>
          </Modal>
        )}
      </BalanceForm>
      {modalOpen && (
        <Modal
          variant="confirmation"
          onClose={handleModalClose}
          onConfirm={handleConfirm}
          changeBalance="true"
        >
          Are you sure?
        </Modal>
      )}
    </>
  );
};

export default BalanceBar;


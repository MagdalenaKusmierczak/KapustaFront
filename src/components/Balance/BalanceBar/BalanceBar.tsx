import { useState, useRef, type ComponentType, type FormHTMLAttributes, type InputHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { updateBalance } from "../../../redux/transactions/operations";
import EntryModal from "../../Modals/EntryModal/EntryModal";
import BalanceModal from "../../Modals/BalanceModal/BalanceModal";

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
  const [balance, setBalance] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const stateBalance = useSelector((state: RootState) => state.transactions.newBalance);

  const dispatch = useDispatch<AppDispatch>();

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBalance(e.target.value)}
          />
          <BalanceButton
            type="submit"
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
          dispatch={handleConfirm}
        />
      )}
    </>
  );
};

export default BalanceBar;


import { Modal } from "../Modal";

const BalanceModal = ({ closeModal, dispatch, changeBalance }: {
  closeModal: () => void;
  dispatch: () => void;
  changeBalance?: string;
}) => {
  return (
    <Modal
      variant="confirmation"
      onClose={closeModal}
      onConfirm={dispatch}
      changeBalance={changeBalance}
    >
      Are you sure?
    </Modal>
  );
};

export default BalanceModal;

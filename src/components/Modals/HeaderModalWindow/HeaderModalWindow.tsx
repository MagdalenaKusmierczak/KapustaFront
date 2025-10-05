import { Modal } from "../Modal";

export const HeaderModalWindow = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
}: {
  children: string;
  closeModal: () => void;
  dispatch: () => void;
  changeBalance?: string;
  text?: string;
}) => {
  return (
    <Modal
      variant="confirmation"
      onClose={closeModal}
      onConfirm={dispatch}
      changeBalance={changeBalance}
      confirmText={text || "YES"}
    >
      {children}
    </Modal>
  );
};

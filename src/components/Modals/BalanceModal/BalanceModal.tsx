import { createPortal } from "react-dom";
import { OrangeButton } from "../../ModalButtons/OrangeButton";
import { WhiteButton } from "../../ModalButtons/WhiteButton";
import { useModal } from "../../../utils/hooks/useModal";
import icons from "../../../assets/icons.svg";
import {
  ModalWindow,
  ContentDiv,
  Text,
  DivWithButtons,
  CloseButton,
  ModalBackdrop,
  CloseSVG,
} from "./BalanceModal.styled";

const modalRoot = document.getElementById("modal-root");

const BalanceModal = ({ closeModal, dispatch, changeBalance }: {
  closeModal: () => void;
  dispatch: () => void;
  changeBalance?: string;
}) => {
  const { handleBackdropClose } = useModal({ onClose: closeModal, onConfirm: dispatch });

  if (!modalRoot) return null;

  return createPortal(
    <ModalBackdrop className="modal-backdrop" onClick={handleBackdropClose}>
      <ModalWindow>
        <CloseButton onClick={closeModal}>
          <CloseSVG width="12px" height="12px">
            <use href={`${icons}#close`}></use>
          </CloseSVG>
        </CloseButton>
        <ContentDiv>
          <Text>Are you sure?</Text>
          <DivWithButtons>
            <OrangeButton
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
            >
              YES
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </DivWithButtons>
        </ContentDiv>
      </ModalWindow>
    </ModalBackdrop>,
    modalRoot
  );
};

export default BalanceModal;

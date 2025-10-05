import { useEffect } from "react";
import { createPortal } from "react-dom";
import { OrangeButton } from "../../ModalButtons/OrangeButton";
import { WhiteButton } from "../../ModalButtons/WhiteButton";
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

const body = document.querySelector("body");
const modalRoot = document.getElementById("modal-root");

const BalanceModal = ({ closeModal, dispatch, changeBalance }: {
  closeModal: () => void;
  dispatch: () => void;
  changeBalance?: string;
}) => {
  const handleEscapeClose = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  const handleBackdropClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      dispatch();
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeClose);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleEscapeClose);
       window.removeEventListener("keydown", handleKeyDown); 
      if (body) body.classList.toggle("no-scroll");
    };
  });

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

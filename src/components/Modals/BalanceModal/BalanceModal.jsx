import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
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

const BalanceModal = ({ closeModal, dispatch, changeBalance }) => {
  const handleEscapeClose = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (event) => {
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
      body.classList.toggle("no-scroll");
    };
  });

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

BalanceModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeBalance: PropTypes.string,
  text: PropTypes.string,
};

export default BalanceModal;

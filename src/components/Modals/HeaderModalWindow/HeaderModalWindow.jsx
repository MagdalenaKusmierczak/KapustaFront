import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { OrangeButton } from "../../ModalButtons/OrangeButton";
import { WhiteButton } from "../../ModalButtons/WhiteButton";
import icons from "../../../assets/icons.svg";
import {
  ModalWrapper,
  ContentWrapper,
  Text,
  ButtonsWrapper,
  CloseButton,
  Backdrop,
} from "./HeaderModalWindow.styled";

const modalRoot = document.getElementById("modal-root");
const body = document.querySelector("body");

export const HeaderModalWindow = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
}) => {
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
    <Backdrop className="modal-backdrop" onClick={handleBackdropClose}>
      <ModalWrapper>
        <CloseButton onClick={closeModal}>
          <svg>
            <use href={`${icons}#close`}></use>
          </svg>
        </CloseButton>
        <ContentWrapper>
          <Text>{children}</Text>
          <ButtonsWrapper>
            <OrangeButton
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
            >
              {text ? text : "YES"}
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </ButtonsWrapper>
        </ContentWrapper>
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};

HeaderModalWindow.propTypes = {
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeBalance: PropTypes.string,
  text: PropTypes.string,
};

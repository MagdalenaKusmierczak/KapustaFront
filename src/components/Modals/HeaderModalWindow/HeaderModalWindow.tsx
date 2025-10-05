import { useEffect } from "react";
import { createPortal } from "react-dom";
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
}: {
  children: string;
  closeModal: () => void;
  dispatch: () => void;
  changeBalance?: string;
  text?: string;
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

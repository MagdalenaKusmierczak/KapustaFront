import { createPortal } from "react-dom";
import { OrangeButton } from "../../ModalButtons/OrangeButton";
import { WhiteButton } from "../../ModalButtons/WhiteButton";
import { useModal } from "../../../utils/hooks/useModal";
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
  const { handleBackdropClose } = useModal({ onClose: closeModal, onConfirm: dispatch });

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

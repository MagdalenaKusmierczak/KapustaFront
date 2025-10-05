import { createPortal } from "react-dom";
import { useModal } from "../../utils/hooks/useModal";
import { Button } from "../ModalButtons/Button";
import icons from "../../assets/icons.svg";
import {
  ModalBackdrop,
  ModalWindow,
  ModalContent,
  ModalText,
  ModalButtons,
  CloseButton,
  CloseSVG,
} from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

export type ModalVariant = "confirmation" | "information" | "information-reports";

interface ModalProps {
  children: React.ReactNode;
  variant?: ModalVariant;
  onClose: () => void;
  onConfirm?: () => void;
  changeBalance?: string;
  confirmText?: string;
  showCloseButton?: boolean;
}

export const Modal = ({
  children,
  variant = "information",
  onClose,
  onConfirm,
  changeBalance,
  confirmText = "YES",
  showCloseButton = true,
}: ModalProps) => {
  const { handleBackdropClose } = useModal({ onClose, onConfirm });

  if (!modalRoot) return null;

  const renderButtons = () => {
    if (variant === "confirmation" && onConfirm) {
      return (
        <ModalButtons>
          <Button
            variant="primary"
            dispatch={onConfirm}
            closeModal={onClose}
            changeBalance={changeBalance}
          >
            {confirmText}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            NO
          </Button>
        </ModalButtons>
      );
    }
    return null;
  };

  return createPortal(
    <ModalBackdrop className="modal-backdrop" onClick={handleBackdropClose}>
      <ModalWindow variant={variant}>
        {showCloseButton && (
          <CloseButton onClick={onClose}>
            <CloseSVG width="12px" height="12px">
              <use href={`${icons}#close`}></use>
            </CloseSVG>
          </CloseButton>
        )}
        <ModalContent variant={variant}>
          <ModalText variant={variant}>{children}</ModalText>
          {renderButtons()}
        </ModalContent>
      </ModalWindow>
    </ModalBackdrop>,
    modalRoot
  );
};

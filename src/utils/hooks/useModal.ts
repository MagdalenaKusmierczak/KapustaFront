import { useEffect } from "react";

interface UseModalProps {
  onClose: () => void;
  onConfirm?: () => void;
}

export const useModal = ({ onClose, onConfirm }: UseModalProps) => {
  const handleEscapeClose = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" && onConfirm) {
      onConfirm();
      onClose();
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    
    window.addEventListener("keydown", handleEscapeClose);
    if (onConfirm) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeClose);
      if (onConfirm) {
        window.removeEventListener("keydown", handleKeyDown);
      }
      if (body) body.classList.toggle("no-scroll");
    };
  }, [onClose, onConfirm]);

  return {
    handleEscapeClose,
    handleBackdropClose,
    handleKeyDown,
  };
};

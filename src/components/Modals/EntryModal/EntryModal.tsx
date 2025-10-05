import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Modal } from "../Modal";

export default function EntryModal() {
  const location = useLocation();
  const isReports = location.pathname === "/reports";
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  if (!isModalOpen) return null;

  return (
    <Modal
      variant={isReports ? "information-reports" : "information"}
      onClose={handleModalClose}
      showCloseButton={false}
    >
      <h2>Hello! To get started, enter the current balance of your account!</h2>
      <p>You can't spend money until you have it</p>
    </Modal>
  );
}

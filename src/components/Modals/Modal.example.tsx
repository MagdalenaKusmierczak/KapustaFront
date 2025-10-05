// Example usage of the unified Modal component
import { Modal } from "./Modal";

// Example 1: Confirmation Modal (replaces HeaderModalWindow & BalanceModal)
const ConfirmationModalExample = () => (
  <Modal
    variant="confirmation"
    onClose={() => console.log("Close")}
    onConfirm={() => console.log("Confirm")}
    confirmText="DELETE"
  >
    Are you sure you want to delete this item?
  </Modal>
);

// Example 2: Information Modal (replaces EntryModal)
const InformationModalExample = () => (
  <Modal
    variant="information"
    onClose={() => console.log("Close")}
    showCloseButton={false}
  >
    <div>
      <h2>Welcome to the app!</h2>
      <p>This is an informational modal.</p>
    </div>
  </Modal>
);

// Example 3: Custom Modal with Balance Change
const BalanceModalExample = () => (
  <Modal
    variant="confirmation"
    onClose={() => console.log("Close")}
    onConfirm={() => console.log("Confirm")}
    changeBalance="true"
    confirmText="YES"
  >
    Are you sure you want to change the balance?
  </Modal>
);

// Example 4: Modal without close button
const NoCloseModalExample = () => (
  <Modal
    variant="information"
    onClose={() => console.log("Close")}
    showCloseButton={false}
  >
    This modal cannot be closed with the X button.
  </Modal>
);

export {
  ConfirmationModalExample,
  InformationModalExample,
  BalanceModalExample,
  NoCloseModalExample,
};

// Example usage of the unified Button component
import { Button } from "./Button";

// Example 1: Primary button (replaces OrangeButton)
const PrimaryButtonExample = () => (
  <Button variant="primary" type="submit" onClick={() => console.log("Primary clicked")}>
    SUBMIT
  </Button>
);

// Example 2: Secondary button (replaces WhiteButton)
const SecondaryButtonExample = () => (
  <Button variant="secondary" onClick={() => console.log("Secondary clicked")}>
    CANCEL
  </Button>
);

// Example 3: Button with modal logic
const ModalButtonExample = () => (
  <Button
    variant="primary"
    dispatch={() => console.log("Dispatch action")}
    closeModal={() => console.log("Close modal")}
    changeBalance="true"
  >
    YES
  </Button>
);

// Example 4: Disabled button
const DisabledButtonExample = () => (
  <Button variant="primary" disabled>
    DISABLED
  </Button>
);

export {
  PrimaryButtonExample,
  SecondaryButtonExample,
  ModalButtonExample,
  DisabledButtonExample,
};

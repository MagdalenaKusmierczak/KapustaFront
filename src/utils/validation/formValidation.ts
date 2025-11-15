export interface FormData {
  description: string;
  amount: string | number;
  category: string;
  date?: Date;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateTransactionForm = (data: FormData): ValidationResult => {
  const errors: string[] = [];

  if (!data.description || data.description.trim() === "") {
    errors.push("Please enter a description");
  }

  if (data.category === "Category" || !data.category) {
    errors.push("Please select a category");
  }

  if (!data.amount || data.amount.toString().trim() === "") {
    errors.push("Please enter an amount");
  } else if (Number(data.amount) <= 0) {
    errors.push("Amount must be greater than 0");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateBalanceForm = (balance: string | number): ValidationResult => {
  const errors: string[] = [];

  if (!balance || balance.toString().trim() === "") {
    errors.push("Please enter a balance amount");
  } else if (Number(balance) < 0) {
    errors.push("Balance cannot be negative");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const showValidationErrors = (errors: string[]): void => {
  errors.forEach(error => {
    alert(error);
  });
};

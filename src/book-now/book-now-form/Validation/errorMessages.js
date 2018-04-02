
export const isRequired = fieldName => `* ${fieldName} is required`;

export const isValidEmail = fieldName => `* Your email is not valid. Please check for errors.`;

export const mustMatch = otherFieldName => {
  return (fieldName) => `* ${fieldName} must match ${otherFieldName}`;
};

export const minLength = length => {
  return (fieldName) => `* ${fieldName} must be at least ${length} characters`;
};

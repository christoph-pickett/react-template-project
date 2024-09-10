export const addTwoNumbers = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  }
  return num1 + num2;
};

export const subtractTwoNumbers = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  }
  return num1 - num2;
};

export const multiplyTwoNumbers = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  }

  return num1 * num2;
};

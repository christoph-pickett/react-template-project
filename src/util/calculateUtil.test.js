import { addTwoNumbers } from "../util/calculateUtil";

import { expect, describe, test } from "@jest/globals";

describe("calculateUtil", () => {
  describe("addTwoNumbers", () => {
    test("should add two numbers correctly", () => {
      const dataToTest = [
        { num1: 2, num2: 3, expected: 5 },
        { num1: -5, num2: 10, expected: 5 },
        { num1: 0, num2: 0, expected: 0 },
      ];

      dataToTest.forEach(({ num1, num2, expected }) => {
        expect(addTwoNumbers(num1, num2)).toBe(expected);
      });
    });

    test("should return undefined if any params are passed in undefined", () => {
      const dataToTest = [
        { num1: undefined, num2: undefined, expected: undefined },
        { num1: undefined, num2: 10, expected: undefined },
        { num1: 0, num2: undefined, expected: undefined },
      ];

      dataToTest.forEach(({ num1, num2, expected }) => {
        expect(addTwoNumbers(num1, num2)).toBe(expected);
      });
    });

    test("should return undefined if any params are passed in are not a number", () => {
      const dataToTest = [
        { num1: "one", num2: "two", expected: undefined },
        { num1: { value: 1 }, num2: { value: 2 }, expected: undefined },
        { num1: [], num2: 1, expected: undefined },
      ];

      dataToTest.forEach(({ num1, num2, expected }) => {
        expect(addTwoNumbers(num1, num2)).toBe(expected);
      });
    });
  });

  describe("what it is you are testing", () => {
    test("single test should be this:", () => {
      const dataToTest = addTwoNumbers(1, 2);

      expect(dataToTest).toEqual(3);
    });
  });
});

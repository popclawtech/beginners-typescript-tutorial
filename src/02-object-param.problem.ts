import { expect, it } from "vitest";

type AddTwoNumber = {
  first:number;
  second:number;
}

export const addTwoNumbers = (params:AddTwoNumber) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});

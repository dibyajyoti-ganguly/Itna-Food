import Sum from "../Sum";

test("Sum should return the sum of 2 numbers", () => {
  const result = Sum(3, 4);

  //Assertion

  expect(result).toBe(5);
});

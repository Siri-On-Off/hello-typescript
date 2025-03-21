import { roundTo } from "./rounding";

test("check round to nickels", () => {
  expect(roundTo(10.0 / 3.0, 0.05)).toBe(3.35);
});


test("check round to cents", () => {
  expect(roundTo(10.123, 0.01)).toBe(10.12); // Rundet auf 2 Dezimalstellen (cents)
});

test("check round to dimes", () => {
  expect(roundTo(10.123, 0.1)).toBe(10.1); // Rundet auf 1 Dezimalstelle (dimes)
});
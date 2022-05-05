import calculate from "../calculate";

it("expect next to be equal to 4", () => {
  const nxtTesting = {
    total: null,
    next: null,
  };
  expect(calculate(nxtTesting, "4")).toEqual({ next: "4", total: null });
});

it("expect operation to be +", () => {
  const plusTesting = {
    total: "4",
    operation: "+",
    next: null,
  };
  expect(calculate(plusTesting, "+")).toEqual(plusTesting);
});

it("expect total to be 10", () => {
  const totalTesting = {
    total: "10",
    operation: "+",
    next: null,
  };
  expect(calculate(totalTesting, "5")).toEqual({ total: "10", operation: "+", next: "5" });
});

it("should display Total", () => {
  const displayTotal = {
    total: "10",
    operation: "+",
    next: "9",
  };
  expect(calculate(displayTotal, "=")).toEqual({
    total: "19",
    operation: null,
    next: null,
  });
});

it("Should clear the screen ", () => {
  const clear = {
    total: "10",
    operation: "+",
    next: "9",
  };
  expect(calculate(clear, "AC")).toEqual({
    total: null,
    operation: null,
    next: null,
  });
});
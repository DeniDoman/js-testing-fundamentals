const { sum, subtract } = require("../math");

test("Sum should be ok", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("Subtraction should be ok", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`PASS: '${title}'`);
  } catch (error) {
    console.error(`FAIL: '${title}'. Reason: ${error}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}

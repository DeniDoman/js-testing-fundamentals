const { sum, subtract } = require("../math");

test("Sum should be ok", () => {
  const result = sum(3, 7);
  expect(result).toBe(10);
});

test("Subtraction should be ok", () => {
  const result = subtract(7, 3);
  expect(result).toBe(4);
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

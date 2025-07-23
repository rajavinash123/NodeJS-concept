//module.export-> export
//require-> impor

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("divide by zero is not allow");
  }
  return a / b;
}

module.exports = {
  add,
  sub,
  divide,
};

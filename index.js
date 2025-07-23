//module.export-> export
//require-> impor
const firstModule = require("./first-module");

console.log(firstModule.add(2, 4));
//output->6

try {
  console.log("trying to divide by zero");
  // const result=firstModule.divide(0,10);//output=>0,trying to divide by zero
  const result = firstModule.divide(30, 10); //output=>3,trying to divide by zero
  console.log(result,"result");
} catch (error) {
  console.log("caught an error", error.message);
}

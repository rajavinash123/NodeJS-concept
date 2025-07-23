const wrapperExplorer = require('./wrapper-explorer');

console.log("In wrapper-demo.js file");

console.log("__filename:", __filename);
console.log("__dirname:", __dirname);

wrapperExplorer.greet("Avinash Kumar");

// output->

// node module wraper demo
// __filename  C:\Users\avina\OneDrive\Desktop\Web development\Node js\2 Node -Module-System\wrapper-explorer.js
// __dirname C:\Users\avina\OneDrive\Desktop\Web development\Node js\2 Node -Module-System 
// In wrapper-demo.js file
// __filename: C:\Users\avina\OneDrive\Desktop\Web development\Node js\2 Node -Module-System\wrapper-demo.js
// __dirname: C:\Users\avina\OneDrive\Desktop\Web development\Node js\2 Node -Module-System
// Hello Avinash Kumar
// PS C:\Users\avina\OneDrive\Desktop\Web development\Node js\2 Node -Module-System>      
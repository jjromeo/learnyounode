var fs = require('fs')

// console.log(process.argv[2]);

var file = fs.readFileSync(process.argv[2]);


// console.log(file);

var linesArray = file.toString().split("\n");

var numLines = (linesArray.length - 1);

console.log(numLines);
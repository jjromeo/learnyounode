var fs = require('fs')

// console.log(process.argv[2]);
var file;
fs.readFile(process.argv[2], function(err, data) {
    if (err) throw err
    var linesArray = data.toString().split("\n");

    var numLines = (linesArray.length - 1);

    console.log(numLines);
});



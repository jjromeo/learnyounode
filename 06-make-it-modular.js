var mymodule = require('./moduleSix');
var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var dir = process.argv[2];

mymodule(dir, ext, function(err, data){
    console.log(data)
});

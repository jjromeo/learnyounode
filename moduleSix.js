var fs = require('fs');
var path = require('path');

function listFiles(dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err);
        var array = new Array;
        for(var i = 0; i < list.length; i++) {
            if(path.extname(list[i]) == "." + ext) {
                array.push(list[i]);
            }
        };
        callback(null, array);
    })
}

module.exports = listFiles


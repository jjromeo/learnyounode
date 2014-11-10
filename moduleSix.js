var fs = require('fs');
var path = require('path');
function listFiles (dir, filter, callback) {
    fs.readdir(process.argv[2], function(err, list) {
        list.sort();
        var array = new Array;
        for(var i = 0; i < list.length; i++) {
            if(path.extname(list[i]) == "." + ) {
                array.push(list[i]);
            }
        };  
        callback(array);
    });
}
module.exports = listFiles


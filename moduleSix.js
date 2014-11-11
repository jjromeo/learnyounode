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






// function listFiles (dir, filter, callback) {
//     fs.readdir(process.argv[2], function(err, list) {
//         list.sort();
//         var array = new Array;
//         for(var i = 0; i < list.length; i++) {
//             if(path.extname(list[i]) == "." + filter) {
//                 array.push(list[i]);
//             }
//         };  
//         callback(array);
//     });
// }

module.exports = listFiles


module.exports = (function() {
    'use strict';
    const fs = require('fs');

    return function(path, content, msg) {

        return new Promise( (resolve, reject) => {
            if (fs.existsSync(path)) {
                console.log(`${path} file already exist`);
            } else {
                fs.writeFile(path, content, err => {
                    if (err)
                        reject(err);
                    resolve(msg);
                })
            }
        })

    };

}());
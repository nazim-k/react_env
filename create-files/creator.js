module.exports = (function() {
    'use strict';
    const fs = require('fs');

    return function(path, content, msg) {

        return new Promise( (resolve, reject) => {
            fs.writeFile(path, content, err => {
                if (err)
                    reject(err);
                resolve(msg);
            })
        })

    };

}());
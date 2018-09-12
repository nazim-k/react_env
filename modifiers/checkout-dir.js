module.exports = (function() {
    'use strict';

    const fs = require('fs'),
        { rootPath } = require('../CONFIG');

    return new Promise( (resolve, reject) => {
        fs.readdir(rootPath, (err, files) => {
            if (err)
                reject(err);
            if (files.length)
                reject(new Error('Directory should be empty.\nCreate new project'));
            resolve('Start create React ENV')
        })
    })
});
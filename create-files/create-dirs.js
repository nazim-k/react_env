module.exports = (function(){
    'use strict';

    const fs = require('fs'),
        { srcPath, componentsPath } =require('../CONFIG');

    return function() {
        return new Promise((resolve, reject) => {
            if(!fs.existsSync(srcPath))
                fs.mkdir(srcPath, err => {
                    if(err)
                        reject(err);
                    fs.mkdir(componentsPath, err => {
                        if(err)
                            reject(err);
                        resolve('create src folder and Components folder');
                    });
                });
            else if (!fs.existsSync(componentsPath))
                fs.mkdir(componentsPath, err => {
                    if(err)
                        reject(err);
                    resolve('create Components folder in src');
                });
            else reject(new Error('src folder and Components folder in it already exists'))
        });
    }

}());
module.exports = (function(){
    'use strict';

    const fs = require('fs'),
        { srcPath, componentsPath, actionsPath, containersPath, reducersPath } =require('../CONFIG');

    function createFolder(folderPath) {
        return new Promise((resolve, reject) => {
            fs.mkdir(folderPath, err=> {
                if(err)
                    reject(err);
                resolve(folderPath);
            })
        })
    }

    function createSrcSubFolders(folders) {
        const waitFor = [];
        for ( let i =0, max = folders.length; i < max; i+=1 ) {
            waitFor.push(createFolder(folders[i]))
        }
        return Promise.all(waitFor);
    }

    return function(rdx) {
        const  folders = [componentsPath];

        if (rdx)
            folders.push(actionsPath, containersPath, reducersPath);

        return new Promise((resolve, reject) => {
            if(!fs.existsSync(srcPath))
                fs.mkdir(srcPath, err => {
                    if (err)
                        reject(err);

                    createSrcSubFolders(folders)
                        .then(res => resolve(res))
                        .catch(err => reject(err));
                });
            else if (!fs.existsSync(componentsPath)) {

                createSrcSubFolders(folders)
                    .then(res => resolve(res))
                    .catch(err => reject(err));
            }
            else reject(new Error('src folder and Components folder in it already exists'))
        });
    }

}());
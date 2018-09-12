module.exports = (function() {
    'use strict';

    const { spawn } = require('child_process'),
        fs = require('fs'),
        { packagePath } = require('../CONFIG');


    return function () {
        return new Promise( (resolve, reject) => {
            let init;

            if (fs.existsSync(packagePath))
                reject(new Error('package json already exists.\nStart with new project please'));

            init = spawn('npm', ['init']);
            init.stdout.on('data', msg => {
                process.stdout.write(`${msg.toString().trim()}  `)
            });

            process.stdin.pipe(init.stdin);

            init.on('close', () => {
                resolve('package.json created')
            });

            init.on('error', err => {
                reject(err)
            });

        })
    }

}());
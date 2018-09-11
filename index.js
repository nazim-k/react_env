#!/usr/bin/env node
(function() {
    'use strict';

    const createDirs = require('./create-files/create-dirs'),
        createEditorConf = require('./create-files/create-editor-conf'),
        createGitIgnore = require('./create-files/create-gitignore'),
        createMainComponent = require('./create-files/create-main-react-comp'),
        createMainHtml = require('./create-files/create-main-html'),
        createMainCss = require('./create-files/create-main-css'),
        createServer = require('./create-files/create-server'),
        createWebpack = require('./create-files/create-webpack'),
        packageModifier = require('./modifiers/packageModifier'),
        installer = require('./modifiers/installer');

    function createConfig() {
        const config = {
                b: false,
                r: false,
                port: 3000
            },
            { argv } = process;

        if (!!~argv.indexOf('-b')) {
            config.b = true;
        }
        if (!!~argv.indexOf('-r')) {
            config.r = true;
        }
        if (!!~argv.indexOf('--port')) {
            var port = argv[argv.indexOf('--port')+1];
            if (Number(port)) {
                config.port = Number(port);
            }
        }
        return config

    }

    const conf = createConfig();
    console.log(conf);

    packageModifier()
        .then(data => {
            console.log('it works ', data);
            console.log('installing express...');
            return installer(conf.b, conf.r);
        })
        .then(data => {
            console.log('RESULT ', data);
        })
        .catch( err => {
            console.err(err.name, err.message, err.stack);
        })

    // createDirs()
    //     .then(res => {
    //         if (!res) console.info('all folders already exists');
    //         else console.info(res);
    //         return createEditorConf()
    //     })
    //     .then(res => {
    //         console.info(res);
    //         return createGitIgnore()
    //     })
    //     .then(res => {
    //         console.info(res);
    //         return createMainComponent(conf.b)
    //     })
    //     .then(res => {
    //         console.info(res);
    //         if (config.b === true) {
    //             return createMainHtml(true)
    //         } else {
    //             var h = createMainHtml(false),
    //                 c =createMainCss();
    //             return Promise.all([h, c])
    //         }
    //     })
    //     .then(res => {
    //         console.info(res);
    //         return createServer(conf.port)
    //     })
    //     .then(res => {
    //         console.info(res);
    //         return createWebpack(conf.b)
    //     })
    //     .then(res => {
    //         console.info(res);
    //     })
    //     .catch( err => {
    //         console.error(err.name, err.message, err.stack);
    //     });
}());


// console.log(process.argv);
// process.stdout.write('Hello world\n');
//
// var questions = [
//     'Your name?',
//     'Your hobby?',
//     'Your language?'
// ], answer = [];
//
// var ask = (function ask() {
//     var i = 0;
//     return function() {
//         if (i >= questions.length) process.exit();
//         process.stdout.write(`${questions[i]} > `);
//         i+=1;
//     }
// }());
//
// ask();
//
// process.stdin.on('data', data => {
//    process.stdout.write('\n');
//    answer.push(data.toString().trim());
//    ask();
// });
//
// process.on('exit', () => {
//     console.log(answer);
// });
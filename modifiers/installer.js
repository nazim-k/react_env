module.exports = (function() {
    'use strict';

    const { spawn } = require('child_process'),
        express_pkg = ['install', '--save', 'express'],
        reactENV_pkg = ['install', '--save-dev', 'react', 'react-dom', 'prop-types', 'webpack', 'webpack-cli', 'webpack-dev-middleware', 'webpack-hot-middleware', 'babel-cli', 'babel-core', 'babel-loader', 'babel-preset-env', 'babel-preset-react', 'html-webpack-plugin'],
        bootstrap_pkg = ['bootstrap', 'jquery', 'popper.js'],
        redux_pkg = ['redux', 'react-redux', 'babel-plugin-transform-object-rest-spread'];

    return function installer(btstr, rdx) {
        var pkg, dev_pkg, installer, dev_installer;


        if (btstr && rdx) {
            pkg = express_pkg.concat(bootstrap_pkg);
            dev_pkg = reactENV_pkg.concat(redux_pkg);
        } else if (!btstr && !rdx) {
            pkg = express_pkg;
            dev_pkg = reactENV_pkg;
        } else if (btstr && !rdx) {
            pkg = express_pkg.concat(bootstrap_pkg);
            dev_pkg = reactENV_pkg;
        } else if (rdx && !btstr) {
            pkg = express_pkg;
            dev_pkg = reactENV_pkg.concat(redux_pkg);
        }

        return new Promise( (resolve, reject) => {
            resolve({ pkg, dev_pkg });
            /**
             * just log which packages should be installed instead of real install
             *
             * real install part is commented
             */
            // installer = spawn('npm', pkg);
            // console.info('INSTALLING PACKAGES');
            // installer.on('close', function() {
            //
            //     dev_installer = spawn('npm', dev_pkg);
            //     dev_installer.on('close', function() {
            //         resolve('ALL PACKAGES INSTALLED');
            //     });
            //     dev_installer.on('error', function(err) {
            //         reject(err);
            //     });
            //
            // });
            //
            // installer.on('error', function(err) {
            //     reject(err)
            // })
            
        })
    }

}());




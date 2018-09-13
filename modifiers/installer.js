module.exports = (function() {
    'use strict';

    var { spawn } = require('child_process'),
        def_pkg = ['install', '--save', 'express@4.16.3', '@babel/polyfill@7.0.0', '@babel/cli@7.0.0', '@babel/core@7.0.1', 'babel-loader@8.0.2', '@babel/preset-env@7.0.0'],
        reactENV_pkg = ['install', '--save-dev', 'react@16.5.0', 'react-dom@16.5.0', 'prop-types@15.6.2', 'webpack@4.18.0', 'webpack-cli@3.1.0', 'webpack-dev-middleware@3.3.0', 'webpack-hot-middleware@2.23.1', '@babel/preset-react@7.0.0', 'html-webpack-plugin@3.2.0'],
        bootstrap_pkg = ['bootstrap@4.1.3', 'jquery@3.3.1', 'popper.js@1.14.4'],
        redux_pkg = ['redux@4.0.0', 'react-redux@5.0.7', 'babel-plugin-transform-object-rest-spread@6.26.0'];

    return function installer(btstr, rdx, dev_mode) {
        var pkg, dev_pkg, installer, dev_installer;

        if (dev_mode) {
            def_pkg = ['install', '--save', 'express', '@babel/polyfill', '@babel/cli', '@babel/core', 'babel-loader', '@babel/preset-env'];
            reactENV_pkg = ['install', '--save-dev', 'react', 'react-dom', 'prop-types', 'webpack', 'webpack-cli', 'webpack-dev-middleware', 'webpack-hot-middleware', '@babel/preset-react', 'html-webpack-plugin'];
            bootstrap_pkg = ['bootstrap', 'jquery', 'popper.js'];
            redux_pkg = ['redux', 'react-redux', 'babel-plugin-transform-object-rest-spread'];
        }


        if (btstr && rdx) {
            pkg = def_pkg.concat(bootstrap_pkg);
            dev_pkg = reactENV_pkg.concat(redux_pkg);
        } else if (!btstr && !rdx) {
            pkg = def_pkg;
            dev_pkg = reactENV_pkg;
        } else if (btstr && !rdx) {
            pkg = express_pkg.concat(bootstrap_pkg);
            dev_pkg = reactENV_pkg;
        } else if (rdx && !btstr) {
            pkg = def_pkg;
            dev_pkg = reactENV_pkg.concat(redux_pkg);
        }

        return new Promise( (resolve, reject) => {
            installer = spawn('npm', pkg);
            installer.on('close', function() {
                dev_installer = spawn('npm', dev_pkg);
                dev_installer.on('close', function() {
                    resolve('ALL PACKAGES INSTALLED');
                });
                dev_installer.on('error', function(err) {
                    reject(err);
                });

            });

            installer.on('error', function(err) {
                reject(err)
            })
            
        })
    }

}());

const transient = {
    "dependencies": {
        "@babel/polyfill": "^7.0.0",
        "bootstrap": "^4.1.3",
        "express": "^4.16.3",
        "jquery": "^3.3.1",
        "popper.js": "^1.14.4"
    },
    "devDependencies": {
        "@babel/cli": "^7.0.0",
        "@babel/core": "^7.0.1",
        "@babel/preset-env": "^7.0.0",
        "@babel/preset-react": "^7.0.0",
        "babel-loader": "^8.0.2",
        "babel-plugin-transform-object-rest-spread": "^6.26.0",
        "html-webpack-plugin": "^3.2.0",
        "prop-types": "^15.6.2",
        "react": "^16.5.0",
        "react-dom": "^16.5.0",
        "react-redux": "^5.0.7",
        "redux": "^4.0.0",
        "webpack": "^4.18.0",
        "webpack-cli": "^3.1.0",
        "webpack-dev-middleware": "^3.3.0"
}};




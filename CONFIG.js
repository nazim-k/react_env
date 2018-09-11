module.exports = (function() {
    'use strict';

    const path = require('path');

    function createCONFIG() {
        this.rootPath = path.resolve(__dirname);
        this.serverPath = path.resolve(__dirname, 'server.js');
        this.editorConfPath = path.resolve(__dirname, '.editorconfig');
        this.gitIgnorePath = path.resolve(__dirname, '.gitignore');
        this.webpackPath = path.resolve(__dirname, 'webpack.config.js');
        this.srcPath = path.resolve(__dirname, 'src');
        this.componentsPath = path.resolve(__dirname, 'src/Components');
        this.mainComponentPath = path.resolve(__dirname, 'src/index.js');
        this.mainHtmlPath = path.resolve(__dirname, 'src/index.html');
        this.mainCssPath = path.resolve(__dirname, 'src/index.css');
        this.packagePath = path.resolve(__dirname, 'package.json');
    }

    return new createCONFIG();

}());
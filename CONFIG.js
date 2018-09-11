module.exports = (function() {
    'use strict';

    const path = require('path');

    function createCONFIG() {
        this.rootPath = __dirname;
        this.serverPath = path.resolve(this.rootPath, 'server.js');
        this.editorConfPath = path.resolve(this.rootPath, '.editorconfig');
        this.gitIgnorePath = path.resolve(this.rootPath, '.gitignore');
        this.webpackPath = path.resolve(this.rootPath, 'webpack.config.js');
        this.srcPath = path.resolve(this.rootPath, 'src');
        this.componentsPath = path.resolve(this.rootPath, 'src/Components');
        this.actionsPath = path.resolve(this.rootPath, 'src/actions');
        this.containersPath = path.resolve(this.rootPath, 'src/containers');
        this.reducersPath = path.resolve(this.rootPath, 'src/reducers');
        this.AppComponentPath = path.resolve(this.rootPath, 'src/index.js');
        this.MainComponentPath = path.resolve(this.rootPath, 'src/Components/index.js');
        this.mainHtmlPath = path.resolve(this.rootPath, 'src/index.html');
        this.mainCssPath = path.resolve(this.rootPath, 'src/index.css');
        this.packagePath = path.resolve(this.rootPath, 'package.json');
    }

    return new createCONFIG();

}());
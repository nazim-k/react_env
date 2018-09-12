module.exports = (function() {
    'use strict';

    const path = require('path');

    function createCONFIG() {
        this.rootPath = process.cwd();
        this.serverPath = path.resolve(this.rootPath, 'server.js');
        this.editorConfPath = path.resolve(this.rootPath, '.editorconfig');
        this.gitIgnorePath = path.resolve(this.rootPath, '.gitignore');
        this.webpackPath = path.resolve(this.rootPath, 'webpack.config.js');
        this.srcPath = path.resolve(this.rootPath, 'src');
        this.componentsPath = path.resolve(this.rootPath, 'src/components');
        this.actionsPath = path.resolve(this.rootPath, 'src/actions');
        this.containersPath = path.resolve(this.rootPath, 'src/containers');
        this.reducersPath = path.resolve(this.rootPath, 'src/reducers');
        this.actionFilePath = path.resolve(this.rootPath, 'src/actions/index.js');
        this.containerFilePath = path.resolve(this.rootPath, 'src/containers/index.js');
        this.reducerFilePath = path.resolve(this.rootPath, 'src/reducers/index.js');
        this.initialStatePath = path.resolve(this.rootPath, 'src/reducers/initialState.js');
        this.AppComponentPath = path.resolve(this.rootPath, 'src/index.js');
        this.MainComponentPath = path.resolve(this.rootPath, 'src/components/index.js');
        this.mainHtmlPath = path.resolve(this.rootPath, 'src/index.html');
        this.mainCssPath = path.resolve(this.rootPath, 'src/index.css');
        this.packagePath = path.resolve(this.rootPath, 'package.json');
    }

    return new createCONFIG();

}());
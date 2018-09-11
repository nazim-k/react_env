module.exports = (function() {
    'use strict';

    const { webpackPath } = require('../CONFIG'),
        webPackContent = require('../file-contents/webpack-cont'),
        creator = require('./creator');

    return function(c) {
        const content = webPackContent(c);
        return creator(webpackPath, content, 'webpack.config.js created')
    }

}());
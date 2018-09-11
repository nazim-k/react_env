module.exports = (function() {
    'use strict';

    const { gitIgnorePath } = require('../CONFIG'),
        gitIgnoreContent = require('../file-contents/gitIgnore'),
        creator = require('./creator');

    return function() {
        return creator(gitIgnorePath, gitIgnoreContent, '.gitignore created');
    }

}());
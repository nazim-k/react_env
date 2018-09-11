module.exports = (function() {
    'use strict';

    const { editorConfPath } = require('../CONFIG'),
        editorContent = require('../file-contents/editorConf'),
        creator = require('./creator');

    return function() {
        return creator(editorConfPath, editorContent, '.editorconfig created');
    }

}());
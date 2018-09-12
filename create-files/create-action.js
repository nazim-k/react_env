module.exports = (function() {
    'use strict';

    const { actionFilePath } = require('../CONFIG'),
        actionContent = require('../file-contents/action-cont'),
        creator = require('./creator');

    return function () {
        return creator(actionFilePath, actionContent, 'action created')
    }
}());
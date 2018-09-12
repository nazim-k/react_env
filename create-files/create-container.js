module.exports = (function() {
    'use strict';

    const { containerFilePath } = require('../CONFIG'),
        containerContent = require('../file-contents/container-cont'),
        creator = require('./creator');

    return function () {
        return creator(containerFilePath, containerContent, 'container created')
    }
}());
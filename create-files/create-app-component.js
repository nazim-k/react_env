module.exports = (function() {
    'use strict';

    const { AppComponentPath } = require('../CONFIG'),
        appComponentContent = require('../file-contents/app-component'),
        creator = require('./creator');

    return function(b) {
        const content = appComponentContent(b);
        return creator(AppComponentPath, content, 'app component created')
    }

}());
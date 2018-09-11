module.exports = (function() {
    'use strict';

    const { mainComponentPath } = require('../CONFIG'),
        mainComponentContent = require('../file-contents/main-component'),
        creator = require('./creator');

    return function(b) {
        const content = mainComponentContent(b);
        return creator(mainComponentPath, content, 'index.js created')
    }

}());
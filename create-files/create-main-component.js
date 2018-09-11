module.exports = (function() {
    'use strict';

    const { MainComponentPath } = require('../CONFIG'),
        mainComponentContent = require('../file-contents/main-component'),
        creator = require('./creator');

    return function(rdx) {
        const content = mainComponentContent(rdx);
        return creator(MainComponentPath, content, 'main component created')
    }

}());
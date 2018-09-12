module.exports = (function() {
    'use strict';

    const { MainComponentPath } = require('../CONFIG'),
        mainComponentContent = require('../file-contents/main-component'),
        creator = require('./creator');

    return function(btstr, rdx) {
        const content = mainComponentContent(btstr, rdx);
        return creator(MainComponentPath, content, 'main component created')
    }

}());
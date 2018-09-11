module.exports = (function() {
    'use strict';

    const { mainCssPath } = require('../CONFIG'),
        mainCssContent = require('../file-contents/main-css'),
        creator = require('./creator');

    return function() {
        return creator(mainCssPath, mainCssContent, 'index.css created');
    }

}());
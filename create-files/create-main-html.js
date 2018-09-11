module.exports = (function() {
    'use strict';

    const { mainHtmlPath } = require('../CONFIG'),
        mainHtmlContent = require('../file-contents/main-html'),
        creator = require('./creator');

    return function(b) {
        var content = mainHtmlContent(b);
        return creator(mainHtmlPath, content, 'index.html created');
    }

}());
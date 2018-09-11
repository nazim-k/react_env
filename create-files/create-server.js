module.exports = (function() {
    'use strict';

    const { serverPath } = require('../CONFIG'),
        serverContent = require('../file-contents/server-content'),
        creator = require('./creator');

    return function(port) {
        const content = serverContent(port);
        return creator(serverPath, content, 'server.js created')
    }

}());
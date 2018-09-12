module.exports = (function () {
   'use strict';

    const { initialStatePath } = require('../CONFIG'),
        initialState = require('../file-contents/initial-state'),
        creator = require('./creator');

    return function() {
        return creator(initialStatePath, initialState, 'initial state created')
    }
}());
module.exports = (function () {
   'use strict';

    const { initialStatePath } = require('../CONFIG'),
        initialState = require('../file-contents/initial-state'),
        creator = require('./creator');

    return function() {
        console.log('type of ', initialState, ' is ',  typeof initialState);
        return creator(initialStatePath, initialState, 'initial state created')
    }
}());
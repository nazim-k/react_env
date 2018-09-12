module.exports = (function() {
   'use strict';

   const { reducerFilePath } = require('../CONFIG'),
       reducerContent = require('../file-contents/reducer-cont'),
       creator = require('./creator');

   return function () {
       creator(reducerFilePath, reducerContent, 'reducer created')
   }
}());
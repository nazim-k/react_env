module.exports = (function() {
   'use strict';

   return function(time) {
       const symbols = Array.from('         downloading...'),

           loader = setInterval(() => {
               var s = symbols.shift();
               symbols.push(s);
               process.stdout.write(`\x1b[37m\x1b[40m |${symbols.join('')}|\r \x1b[0m`);
           }, time);

       return {
           stop() {
               clearInterval(loader);
           }
       }
   }
}());
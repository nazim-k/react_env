module.exports = (function() {
   'use strict';

   return function(time) {
       const symbols = Array.from('          downloading'),

           loader = setInterval(() => {
               var s = symbols.shift();
               symbols.push(s);
               process.stdout.write(`|${symbols.join('')}|\r`);
           }, time);

       return {
           stop() {
               clearInterval(loader);
           }
       }
   }
}());
module.exports = (function() {
    return function(b) {
        if (b === true) {
            return `
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div className="container text-center">
            <h1>React ENV</h1>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
    `.trim()
        } else {
            return `
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div className="main">
            <h1>React ENV</h1>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
    `.trim()
        }
    }
}());
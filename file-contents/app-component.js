module.exports = (function() {
    return function(b) {
        if (b === true) {
            return `
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './Components/index';

const App = () => {
    return(
        <div className="container text-center">
            <MainComponent/>
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
import MainComponent from './Components/index';

const App = () => {
    return(
        <div className="main">
            <MainComponent/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
    `.trim()
        }
    }
}());
module.exports = (function() {
    return function(rdx) {

        if (rdx) {
            return `
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

const store = createStore(
    reducer,
    // Redux Chrome Extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
    return(
        <Provider store={ store }>
            <div className="container">
                <MainContainer/>
            </div>
        </Provider>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
    `.trim()
        } else {
            return `
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components';

const App = () => {
    return(
        <div className="container">
            <MainComponent/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
    `.trim()
        }
    }
}());
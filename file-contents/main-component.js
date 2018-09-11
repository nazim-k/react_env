module.exports = (function() {
    return function(rdx) {
        return `
import React from 'react';

const MainComponent = () => {

    return(
        <div>
            <h1>React ENV</h1>
        </div>
    )

};

export default MainComponent
    `.trim()
    }
}());
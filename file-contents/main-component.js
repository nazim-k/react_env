module.exports = (function() {
    'use strict';

    return function(btstr, rdx) {

        const hclass = (btstr && rdx)
            ? '{ "text-center pt-5 pb-5 text-white " + color }'
            : btstr ? '"text-center pt-5 pb-5 text-white bg-info"'
            : '"bg-info"',
            iclass = '"form-control"';

        if (rdx) {
            return `
'use strict';
import React from 'react';

const MainComponent = (props) => {
    const { head, color, onBtnClick, onBgClick } = props,
        newColor = color === 'bg-info'
            ? 'bg-dark'
            : 'bg-info';

    return(
        <div>
            <h1 className=${hclass}
                onClick={ () => { onBgClick(newColor) } }
                onMouseOver={ (e) => { e.target.style.cursor = 'pointer' } }
            >
                { head }
            </h1>
            <input
                className=${iclass}
                type="text"
                value={ head }
                onChange={ (e) => { onBtnClick(e.target.value)} }
            />
        </div>
    )

};

export default MainComponent
    `.trim()
        } else {
            return `
'use strict';
import React from 'react';

const MainComponent = () => {

    return(
        <div>
            <h1 className=${hclass}>React_ENV</h1>
        </div>
    )

};

export default MainComponent
    `.trim()
        }
    }
}());
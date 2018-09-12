module.exports = (function() {
    'use strict';

    return `
'use strict';

import { CHANGE_HEAD, CHANGE_COLOR } from '../actions';
import initialState from './initial-state';

export function reducer(state = initialState, action) {

    switch (action.type) {

        case CHANGE_HEAD:
            return Object.assign({}, state, {
                head: action.head
            });

        case CHANGE_COLOR:
            return Object.assign({}, state, {
                color: action.color
            });

        default:
            return state;
    }
}
    `.trim()
}());
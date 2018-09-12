module.exports = (function() {
    'use strict';

    return `
'use strict';

const CHANGE_HEAD = 'CHANGE_HEAD',
    CHANGE_COLOR = 'CHANGE_BG_COLOR';

function changeHead(head) {
    return {
        type: CHANGE_HEAD,
        head
    }
}

function changeColor(color) {
    return {
        type: CHANGE_COLOR,
        color
    }
}

export {
    CHANGE_HEAD,
    CHANGE_COLOR,
    changeHead,
    changeColor
}
    `.trim()
}());
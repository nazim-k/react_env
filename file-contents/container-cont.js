module.exports = (function() {
    'use strict';

    return `
'use strict';

import { connect } from 'react-redux';
import MainComponent from '../Components';
import { changeHead, changeColor } from '../actions'

const mapStateToProps = (state) => {
        return {
            head: state.head,
            color: state.color
        }
    },

    mapDispatchToProps = (dispatch) => {
        return {
            onBtnClick(newHead) {
                dispatch(changeHead(newHead))
            },
            onBgClick(newColor) {
                dispatch(changeColor(newColor))
            }
        }
    },

    MainContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(MainComponent);

export default MainContainer
    `.trim()
}());
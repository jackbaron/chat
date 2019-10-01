import * as types from './../constants/action-types';

const typing = (state = "", action) => {
    console.log(action);
    switch(action.type) {
        case types.SET_TYPING_VALUE:
            return action.value;
        case types.SEND_MESSAGE:
            return "";
        default:
            return state;
    }
}

export default typing;
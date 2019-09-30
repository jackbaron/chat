import * as types from './../constants/action-types';

export default function activeUserId (state = null, action) {
    console.log(action);
    switch(action.type) {
        case types.SET_TYPING_VALUE:
            console.log(action.id);
            return action.id;
        default:
            return state;
    }
}
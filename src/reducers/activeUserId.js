import * as types from './../constants/action-types';

export default function activeUserId (state = null, action) {
    switch(action.type) {
        case types.SET_ACTIVE_USER:
            return action.id;
        default:
            return state;
    }
}
import _ from 'lodash';

import { getMessages } from '../static-data';
import * as types from './../constants/action-types';

export default function messages(state = getMessages(10), action) {
    switch(action.type) {
        case types.SEND_MESSAGE:
            const {message, userId} = action;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop() + 1;

            return {
                ...state,
                [userId]: {
                ...allUserMsgs,
                [number]: {
                    number,
                    text: message,
                    is_user_msg: true
                }
                }
            };
        default:
            return state;
    }
}
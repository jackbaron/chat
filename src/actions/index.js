import * as types from './../constants/action-types';

export const setActiveUserId = id => ({
    type: types.SET_ACTIVE_USER,
    id   
});

export const sendMessage = (message, userId) => ({
    type : types.SEND_MESSAGE,
    message,
    userId
});

export const setTypingValue = value => ({
    type : types.SET_TYPING_VALUE,
    value
});
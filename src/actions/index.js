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

export const submitUserRegister = user => ({
    type : types.SET_USER_REGISTER,
    user
});

export const setValueUser = (name, value) => ({
    type : types.SET_VALUE_USER,
    name,
    value
});

export const submitLogin = user => ({
    type : types.SUBMIT_LOGIN_USER,
    user,
});
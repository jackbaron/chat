import firebase from '../firebase';

import * as types from "../constants/action-types";

const defaultState = {
    username: '',
    email: '',
    password: '',
    error: null
};

const user = (state = defaultState, action) => {
    switch(action.type) {
        case types.SET_VALUE_USER:
            state[action.name] = action.value;
            return state;
        case types.SET_USER_REGISTER:
                firebase.auth().createUserWithEmailAndPassword(action.user.email, action.user.password)
                .then(() => {
                    const user = firebase.auth().currentUser;
                    user
                        .updateProfile({displayName: action.user.username})
                    .then(() => {
                        this.props.history.push('/');
                    })
                    .catch(error => {
                        this.setState({error});
                    });
                    })
                .catch(error => {
                    console.log(error);
                    // this.setState({state.error : error});
                });
            return state;
        case types.SUBMIT_LOGIN_USER:
            
            return state;
        default:
            return state
    }
}

export default user;
import { connect } from 'react-redux';

import {submitUserRegister, setValueUser} from './../actions/index';

import Register from './../components/Register';

const mapStateToProps = state => ({
    user : state.user
});

const mapDispatchToProps = (dispatch, own) => ({
    onChangeUserRegister : (name, value) => dispatch(setValueUser(name, value)),
    submitUserRegister : (user) => dispatch(submitUserRegister(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
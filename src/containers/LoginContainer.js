import { connect } from 'react-redux';

import { setValueUser, submitLogin } from '../actions';
import Login from '../components/Login';

const mapStateToProps = state => ({
    user : state.user,
});

const mapDispatchToProps = (dispatch, own) => ({
    onChange : (name, value) => dispatch(setValueUser(name, value)),
    submitLogin : (email, password) => dispatch(submitLogin(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
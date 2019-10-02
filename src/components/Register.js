import React from 'react';
import PropTypes from 'prop-types';

const Register = ({user, onChangeUserRegister, submitUserRegister}) => {
    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        submitUserRegister(user);
    };

    const handleChangeUser = (e) => {
        e.preventDefault();
        let name = e.target.name,
            value = e.target.value;
            onChangeUserRegister(name, value);
    };

    return (
        <div className="container">
            <div className="top" />
            <div className="bottom" />
            <div className="center">
                <form onSubmit={handleSubmit}>
                    <h2>Please Register</h2>
                    <input type="name" name="username" onChange={handleChangeUser} placeholder="Username" />
                    <input type="email" name="email" onChange={handleChangeUser} placeholder="email" />
                    <input type="password" name="password" onChange={handleChangeUser} placeholder="password" />
                    <button onClick={handleSubmit} className="btn-regist-login">Submit</button>
                </form>
            </div>
        </div>
    );
}

Register.propTypes = {
    // user : PropTypes.objectOf(PropTypes.shape({
    //     username : PropTypes.string.isRequired,
    //     email : PropTypes.string.isRequired,
    //     password : PropTypes.string.isRequired
    // }).isRequired).isRequired,
    onChangeUserRegister : PropTypes.func.isRequired,
    submitUserRegister : PropTypes.func.isRequired
}

export default Register;
import React from 'react';

const Login = ({user, onChange, submitLogin}) => {

    const handleChange = e => {
        e.preventDefault();
        let name = e.target.name,
            value = e.target.value;
            onChange(name, value);
    };

    const submitLoginUser = e => {
        e.preventDefault();
        submitLogin(user)
    };

    return (
        <div className="container">
            <div className="top" />
            <div className="bottom" />
            <div className="center">
                <h2>Please Sign In</h2>
                <input type="email" name="email" onChange={handleChange} placeholder="email" />
                <input type="password" name="password" onChange={handleChange} placeholder="password" />
                <button className="btn-regist-login">Submit</button>
            </div>
        </div>
    );
}

export default Login;
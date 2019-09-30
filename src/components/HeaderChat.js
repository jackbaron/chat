import React from 'react';

const HeaderChat = ({activeUser}) => {
    const {name, status} = activeUser;
    return (
        <header className="Header">
            <h1 className="Header__name">{name}</h1>
            <p className="Header__status">{status}</p>
        </header>
    )
}

export default HeaderChat;
import React from 'react';

const Chats = ({activeMsg}) => {
    const Chat = ({message}) => {
        const {text, is_user_msg} = message;
        return (
            <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
        )
    };
    return (
        <div className="Chats">
            {activeMsg.map((message, index) => (
                <Chat message={message} key={index} />
            ))}
        </div>
    )
}

export default Chats;
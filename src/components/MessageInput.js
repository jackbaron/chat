import React from 'react';
import iconSend from './../send.png'

const MessageInput = ({activeUserId, messageSend, onChangeTyping, onSubmitSendMessage}) => {
    const handleChange = e => {
        onChangeTyping(e.target.value);
    };
    
    const handleSubmitSendMessage = e => {
        e.preventDefault();
        onSubmitSendMessage(messageSend, activeUserId);
    };

    return (
        <form className="Message" onSubmit={handleSubmitSendMessage}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={messageSend}
                placeholder="write a message"
            />
            <img src={iconSend} onClick={handleSubmitSendMessage} className="icon-send"/>
        </form>
    )
}

export default MessageInput;
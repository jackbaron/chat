import React from 'react';

class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        console.log(this.chatsRef);
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };
    
    Chat(message, index) {
        const {text, is_user_msg} = message;
        return (
            <span key={index} className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
        )
    };
    
    render() {
        const {activeMsg} = this.props;
        return (
            <div className="Chats" ref={this.chatsRef}>
                {activeMsg.map((message, index) => (
                    this.Chat(message, index)
                ))}
            </div>
        )
    }
}

export default Chats;
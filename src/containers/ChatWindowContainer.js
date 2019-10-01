import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import HeaderChat from './../components/HeaderChat';
import Chats from './../components/Chats';
import MessageInput from './../components/MessageInput';

import { setTypingValue, sendMessage } from './../actions/index';

const ChatWinDowContainer = ({activeUser, activeUserId, activeMsg, onChangeTyping, messageSend, onSubmitSendMessage}) => {
    console.log(messageSend);
    return(
        <div className="boxChat-content">
            <HeaderChat activeUser={activeUser}/>
            <Chats activeMsg={activeMsg}/>
            <MessageInput activeUserId={activeUserId}
                onChangeTyping={onChangeTyping} onSubmitSendMessage={onSubmitSendMessage} messageSend={messageSend} />
        </div>
    )
}

const mapStateToProps = state => ({
    activeUserId : state.activeUserId,
    activeUser : state.contacts[state.activeUserId],
    activeMsg : _.values(state.messages[state.activeUserId]),
    messageSend : state.messageSend
});

const mapDispatchToProps = (dispatch, own) => ({
    onChangeTyping : (messageSend) => dispatch(setTypingValue(messageSend)),
    onSubmitSendMessage : (messageSend, userID) => dispatch(sendMessage(messageSend, userID))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWinDowContainer);
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import HeaderChat from './../components/HeaderChat';
import Chats from './../components/Chats';

const ChatWinDowContainer = ({activeUser, activeMsg}) => {
    return(
        <div className="boxChat-content">
            <HeaderChat activeUser={activeUser}/>
            <Chats activeMsg={activeMsg}/>
        </div>
    )
}

const mapStateToProps = state => ({
    activeUser : state.contacts[state.activeUserId],
    activeMsg : _.values(state.messages[state.activeUserId])
});

export default connect(mapStateToProps, null)(ChatWinDowContainer);
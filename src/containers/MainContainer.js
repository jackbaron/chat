import React from 'react';
import { connect } from 'react-redux';

import Empty from './../components/Empty';
import ChatWindow from './../components/ChatWindow';

const MainContainer = ({user, activeUserId}) => {
    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId}/>
        } else {
            return <ChatWindow/>
        }
    }
    return (
        <div className="box-Chat">{renderMainContent()}</div>
    )
}

const mapStateToProps = state => ({
    user : state.user,
    activeUserId : state.activeUserId
});

export default connect(mapStateToProps, null)(MainContainer);
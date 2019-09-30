import React from 'react';

const User = ({contacts, clickActiveUser}) => {
    return (
        <div className="box-User">
            {contacts.map(contact =>
                <div className="User" onClick={() => clickActiveUser(contact.user_id)} key={contact.user_id}>
                    <div className="User">
                        <img src={contact.profile_pic} alt={contact.name} className="User__pic" />
                        <div className="User__details">
                            <p className="User__details-name">{contact.name}</p>
                            <p className="User__details-status">{contact.status}</p>
                        </div>
                    </div> 
                </div>
            )}
        </div>
        
    );
}

export default User;
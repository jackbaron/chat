import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/" except="true">Login</Link></li>
                    <li><Link to="/register" except="true">Register</Link></li>
                    <li><Link to="/chat" except="true">Chat</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
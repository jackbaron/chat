import React from 'react';
import './../App.css';

import SideBar from './Sidebar';
import Main from './Main';

const App = ()  => {
    return (
        <div className="App">
            <SideBar/>
            <Main/>
        </div>
    );
}

export default App;

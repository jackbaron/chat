import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './../App.css';
import SideBar from './Sidebar';
import Main from './Main';
import Header from './Header';

import routes from './../route-config';


const App = ()  => {
    const showRoute = (routes) => {
        let xhtml = null;
        
        if (routes.length >0 ) {
            xhtml = routes.map((route, index) => {
                return (
                    <Route key={index} exact={route.exact} path={route.path} component={route.main} />
                );
            });
        }
        return xhtml;
    }

    return (
        <Router>
            <Header/>
            <div className="App">
                {showRoute(routes)}
                {/* <SideBar/>
                <Main/> */}
            </div>
        </Router>
    );

    
}

export default App;

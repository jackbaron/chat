import React from 'react';

import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

const routes = [
    {
        path: '/',
        exact : true,
        main: () => <LoginContainer/>,
    },
    {
        path: '/register',
        exact : true,
        main: () => <RegisterContainer/>
    }
];

export default routes;
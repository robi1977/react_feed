import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Singup from '././components/Singup/Singup';
import NotFound from '././components/NotFound/NotFound';

const Routes=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/singup' component={Singup} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
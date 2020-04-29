import React from 'react';

import { Header } from '../../components';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../router';

import LoginFormComponent from '../../components/LoginForm/LoginFormComponent';
import RegisterFormComponent from '../../components/RegisterForm/RegisterFormComponent';

const Auth = () => {
    return (
        <div>
            <Header /> 

            <Switch>
                <Route path={routes.login} component={LoginFormComponent} />
                <Route path={routes.register} component={RegisterFormComponent} /> 
            </Switch>
        </div>
    );
}

export default Auth;
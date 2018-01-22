import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { UserManage } from '../user/views/UserManage';
import { UserContent } from '../user/views/UserContent';

export const userManageRouters = (
    <UserManage>
        <Switch>
            <Route path="/userManage/user" component={UserContent}/>
            <Redirect to="/userManage/user"/>
        </Switch>
    </UserManage>
);
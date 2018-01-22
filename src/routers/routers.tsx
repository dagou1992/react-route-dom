import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Main from '../components/Main';
import { userManageRouters } from '../components/user';
import { controlPanelRouters } from '../components/contralPanel';

const Router = () => (
    <HashRouter>
        <Main>
            <Switch>
                <Route exact={true} path="/" component={() => controlPanelRouters}/>
                <Route path="/controlPanel" render={() => controlPanelRouters}/>
                <Route path="/userManage" render={() => userManageRouters}/>
            </Switch>
        </Main>
    </HashRouter>
);

export default Router;
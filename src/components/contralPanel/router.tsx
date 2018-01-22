import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ControlPanel } from './views/ControlPanel';
import { SettingTime } from './views/SettingTime';
import { SettingTopic } from './views/SettingTopic';
import { LiveControl } from './views/LiveControl';

export const controlPanelRouters = (
    <ControlPanel>
        <Switch>
            <Route path="/controlPanel/settingTime" component={SettingTime}/>
            <Route path="/controlPanel/settingTopic" component={SettingTopic}/>
            <Route path="/controlPanel/LiveControl" component={LiveControl}/>
            <Redirect to="/controlPanel/settingTime"/>
        </Switch>
    </ControlPanel>
);
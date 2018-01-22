import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import store from './store/store';
import Router from './routers/routers';

import './style/index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

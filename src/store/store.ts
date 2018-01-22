import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];
const store = createStore(applyMiddleware(...middleware));

export default store;

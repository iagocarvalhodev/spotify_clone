import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

const middleware=[];

const sagaMonitor=process.env.NODE_ENV==='development'? console.tron.createSagaMonitor():null;

const sagaMiddleware=createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);

const composer = process.env.NODE_ENV==='development'? compose(applyMiddleware(...middleware), console.tron.createEnhancer()):compose(applyMiddleware(...middleware));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
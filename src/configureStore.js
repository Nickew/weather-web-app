import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './modules/reducers';
import sagas from './modules/sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(sagas);
  console.log(store);
  return store;
}

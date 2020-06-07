import { createStore, applyMiddleware } from 'redux';
import RootReducers from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(RootReducers);

// export const store = createStore(RootReducers, applyMiddleware(thunk));
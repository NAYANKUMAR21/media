import { applyMiddleware, legacy_createStore, combineReducers } from 'redux';
import { AuthReducer } from './reducer/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: AuthReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

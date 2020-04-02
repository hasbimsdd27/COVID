import {createStore, combineReducers, applyMiddleware} from 'redux';
import {promise, logger} from '../middleware';
import Answer from '../_reducers/answer';
import Submit from '../_reducers/submit';

const rootReducers = combineReducers({Answer, Submit});
const store = createStore(rootReducers, applyMiddleware(promise, logger));
export default store;

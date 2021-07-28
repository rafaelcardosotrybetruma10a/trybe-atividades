import { createStore } from 'redux';
import rootReducer from './reduc/reducers/index';

const store = createStore(rootReducer);

export default store;

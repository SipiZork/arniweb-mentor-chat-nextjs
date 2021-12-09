import { createStore } from 'redux';
import RootReducer from './redurcers/rootReducer';

const store = createStore(RootReducer);

export default store;
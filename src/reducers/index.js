import { combineReducers } from 'redux';
import productsReducer from './products';
import shopReducer from './shop';

const rootReducer = combineReducers({
    productsReducer,
    shopReducer
});

export default rootReducer;
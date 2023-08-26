import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;
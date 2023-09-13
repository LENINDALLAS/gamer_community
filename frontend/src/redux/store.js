import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux';
import transactionReducer from "./slice/addSlice";

const initialState = {
    chat: []
};

const reducer = combineReducers({
    transaction: transactionReducer
});

const store = configureStore({
    reducer,
    // preloadedState: initialState
});

export default store;
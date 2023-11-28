import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/user-reducers'
import transactionReducer from "./reducers/transaction-reducers";

const store = configureStore({
    reducer:{
        user: userReducer,
        transaction: transactionReducer
    }
})

export default store
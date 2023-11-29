import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/user-reducers'
import transactionReducer from "./reducers/transaction-reducers";
import productReducer from "./reducers/product-reducers";

const store = configureStore({
    reducer:{
        user: userReducer,
        transaction: transactionReducer,
        product: productReducer
    }
})

export default store
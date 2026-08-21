import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './slice'

const store=configureStore({
    reducer:{
        slice2:CartReducer
    }
})
export default store;
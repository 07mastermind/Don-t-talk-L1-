import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlicer'

const stores=configureStore({
    reducer:{
        cartSlice:cartReducer,
    }
})
export default stores;  
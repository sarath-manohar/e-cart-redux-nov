import { configureStore } from "@reduxjs/toolkit";
import whishlistSlice from '../slice/whishlist'
import cartSlice from "../slice/cartSlice";

const store = configureStore({
    reducer:{
     whishlistReducer:whishlistSlice,
     cartReducer:cartSlice
    }
})

export default store
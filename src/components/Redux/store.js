import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import ProductSlice from "./Slices/ProductSlice";
import PaginationSlice from "./Slices/PaginationSlice";

const Store = configureStore({
    reducer:{
        cartState: CartSlice.reducer,
        productState: ProductSlice.reducer,
        paginationState: PaginationSlice.reducer
    }
})

export default Store;
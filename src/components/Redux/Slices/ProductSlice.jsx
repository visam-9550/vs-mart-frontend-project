import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: "productSlice",
    initialState:{
        productsData: [],
        loading: true,
        err: false,
        searchValue: "",
        priceRange: "",
        category: ""
    },
    reducers:{
        setProductsData:(state, action) =>{
            state.productsData = action.payload
        },
        setSearchValue: (state, action)=>{
            state.searchValue = action.payload
        },
        setCategory: (state, action) =>{
            state.category = action.payload
        },
        setPriceRange: (state, action) =>{
            state.priceRange = action.payload
        },
        setLoading: (state, action) =>{
            state.loading = action.payload
        },
        setErr: (state, action) =>{
            state.err = action.payload
        }
    }
})

export default ProductSlice;
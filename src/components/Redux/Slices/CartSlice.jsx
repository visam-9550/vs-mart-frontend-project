import {createSlice} from "@reduxjs/toolkit"
import { GrSettingsOption } from "react-icons/gr"

const CartSlice = createSlice({
    name: "CartSlice",
    initialState:{
        cartData: [],
        cartLength: 0,
        loading: true,
        err: false,
        totalCartPrice: 0
    },
    reducers:{
        setCartData:(state, action)=>{
            state.cartData = action.payload
        },
        setCartLength: (state, action)=>{
            state.cartLength = action.payload
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setErr: (state, action) =>{
            state.err = action.payload
        },
        setTotalCartPrice: (state, action)=>{
            state.totalCartPrice = action.payload
        }
    }
})

export default CartSlice;
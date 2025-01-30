import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
    name: "paginationSlice",
    initialState:{
        pageNumber: 1,
        totalPages: "",
        startIndex: "",
        endIndex: "",
        pageLength: 8
    },
    reducers:{
        setPageNumber: (state, action)=>{
            state.pageNumber = action.payload
        },
        setTotalPages: (state, action)=>{
            state.totalPages = action.payload
        },
        setStartIndex: (state, action) =>{
            state.startIndex = action.payload
        },
        setEndIndex: (state, action) =>{
            state.endIndex = action.payload
        },
        setPageLength: (state, action)=>{
            state.pageLength = action.payload
        }

    }
})

export default PaginationSlice;
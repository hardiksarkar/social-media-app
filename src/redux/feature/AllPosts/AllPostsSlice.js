import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    allPostsData:null,
    error:""
}

export const getPosts = createAsyncThunk("get/getPosts",()=>{
    return axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>res.data)
})

const {pending,fulfilled,rejected} = getPosts;

const AllPostSLice = createSlice({
    name:"AllPosts",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fulfilled,(state,action)=>{
            state.loading=false
            state.allPostsData=action.payload
            state.error=""
        })
        builder.addCase(rejected,(state,action)=>{
            state.loading=false
            state.allPostsData=[]
            state.error=action.error
        })
    }
})

export default AllPostSLice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const PostDetailSlice = createSlice({
    name:"PostDetails",
    initialState:initialState,
    reducers:{
        fetchPostDetails: (state,action)=>action.payload
    }
})

export const {fetchPostDetails} = PostDetailSlice.actions;
export default PostDetailSlice.reducer;
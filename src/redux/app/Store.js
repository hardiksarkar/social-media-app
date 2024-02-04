import { configureStore } from "@reduxjs/toolkit";
import AllPostsSliceReducer from "../feature/AllPosts/AllPostsSlice";
import PostDetailsSliceReducer from "../feature/PostDetailsSlice";

const store = configureStore({
    reducer:{
        AllPosts:AllPostsSliceReducer,
        PostDetails:PostDetailsSliceReducer
    }
})

export default store;
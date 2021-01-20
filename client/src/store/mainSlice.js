import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
//import {fetchSinglePost,fetchAllPosts} from './apis'
import axios from 'axios';

export const fetchSinglePost = createAsyncThunk(
    'singlePost',
    async (data, thunkAPI)=>{
            const res = await axios.get("http://localhost:4000/api/posts/" + data)
        return res.data
  
    }
);


const mySlice = createSlice({
    name:'posts',
    initialState: {
    },
    reducers:{
        addPost(state,action){
            console.log('add')

        },
        viewPost(state,action){
            state.post= action.payload

        },
        deletePost(state,action){
            console.log('del')

        },
        
    },
    extraReducers:{
        [fetchSinglePost.fulfilled] : (state, action) =>{
            state.post=action.payload
       },
//        [fetchAllPosts.fulfilled] : (state, action) =>{
//         state.posts=action.payload
//    }
}
});

export const { addPost, viewPost,deletePost} = mySlice.actions;
export const myreducer = mySlice.reducer
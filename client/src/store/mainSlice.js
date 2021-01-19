import { createSlice } from "@reduxjs/toolkit";
import {fetchSinglePost} from './apis'
const mySlice = createSlice({
    name:'posts',
    initialState: {
        post:{}
    },
    reducers:{
        addPost(state,action){
            console.log('add')

        },
        viewPost(state,action){
            console.log('view')

        },
        deletePost(state,action){
            console.log('del')

        },
        
    },
    extraReducers:{
        [fetchSinglePost.fulfilled] : (state, action) =>{
             state.post=action.payload
        }
    }
});

export const { addPost, viewPost,deletePost} = mySlice.actions;
export const myreducer = mySlice.reducer
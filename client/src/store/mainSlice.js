import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
    name:'posts',
    initialState: {},
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
        
    }
});

export const { addPost, viewPost,deletePost} = mySlice.actions;
export const myreducer = mySlice.reducer
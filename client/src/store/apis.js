import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchSinglePost = createAsyncThunk(
    'singlePost',
    async (data, thunkAPI)=>{
        console.log(".....",data)
        const res = await axios.get("http://localhost:4000/api/posts/" + data)
        return res.data.data
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err));
    }
);
import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'


export const fetchSinglePost = createAsyncThunk(
    'singlePost',
    async (data, thunkAPI)=>{
        console.log(".....",data)
        try {
            
        } catch (error) {
            
        }
        const res = await axios.get("http://localhost:4000/api/posts/" + data)
        return res.data.data
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err));
    }
);
// export function fetchAllPosts() {
//     const dispatch = useDispatch()

//     return async dispatch => {
    
//         try {
//           const response = await fetch('http://localhost:4000/api/posts/')
//           const data = await response.json();
//           console.log(data)
    
//         } catch (error) {
//           console.log('error')
//         }
//       }
// } 
export const fetchAllPosts = createAsyncThunk(
    'fetchAllPosts',
    async (data, thunkAPI)=>{
        const res = await axios.get('http://localhost:4000/api/posts/')
        console.log(",,,,,,,,,,,",res)
        return res.data
        
    }
);

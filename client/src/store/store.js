import {configureStore} from '@reduxjs/toolkit'
import {myreducer} from './mainSlice'
const store = configureStore(
    {
        reducer: myreducer
    }
)
export default store
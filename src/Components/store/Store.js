import {configureStore} from '@reduxjs/toolkit'
import usersReducer from "../UserSlice/UserSlice"

const store = configureStore ({
    reducer :{
        users : usersReducer
    }
})

export default store;
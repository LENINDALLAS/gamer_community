import { createSlice } from '@reduxjs/toolkit'
import { ADD_FLAG } from "../constants";
import { flagPostResponseReducer, storedDataReducer } from "../reducer/addReducer";

const slice = createSlice({
    name: ADD_FLAG,
    initialState: {
       flagResponse: '',
       chat: []
    },
    reducers: {
        flagPostResponse: flagPostResponseReducer,
        storedData: storedDataReducer,
    }
});

export default slice.reducer;

export const { flagPostResponse, storedData } = slice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const advRoute = "http://localhost:3001"
const allAdvRoute = "http://localhost:3001/allAdvices"
const suggestAdvRoute = "http://localhost:3001/suggestAdvice"
const addAdvRoute = "http://localhost:3001/addAdvice"
const removeAdvRoute = "http://localhost:3001/removeAdvice"
export const getAdv = createAsyncThunk("getAdvices", async () => {
    try {
        const res = await axios.get(advRoute)
        return res.data
    }
    catch (error) {
        console.log(error.message)
    }
})
export const getAllAdvice = createAsyncThunk("getAllAdv", async () => {
    try {
        const res = await axios.get(allAdvRoute)
        return res.data
    }
    catch (error) {
        console.log(error.message)
    }
})
export const setSuggestedAdvice = createAsyncThunk("postSuggestAdv", async (adv) => {
    try {
        const res = await axios.post(suggestAdvRoute,adv)
        return console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}) 
export const setAdvice = createAsyncThunk("postAdv", (adv) => {
    try {
        axios.post(addAdvRoute, adv)
    } catch (error) {
        console.log(error.message)
    }
})
export const removeadvice = createAsyncThunk("removeAdvice",async () =>{
    const res = await axios.delete(removeAdvRoute)
    return res
} )

const slice = createSlice({
    name: "advices",
    initialState: {
        advices: []
    },
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getAdv.fulfilled, (state, action) => {
            return { ...state.advices, advices: action.payload }
        })
    }
})

export default slice.reducer
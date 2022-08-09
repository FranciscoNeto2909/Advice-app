import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const advRoute = "http://localhost:3001"
const suggestedAdvRoute = "http://localhost:3001/suggestedAdvice"
const suggestAdvRoute = "http://localhost:3001/suggestAdvice"
const addAdvRoute = "http://localhost:3001/addAdvice"

export const getAdv = createAsyncThunk("getAdvices", async () => {
    try {
        const res = await axios.get(advRoute)
        return res.data
    }
    catch (error) {
        console.log(error.message)
    }
})
export const getSuggestedAdvice = createAsyncThunk("getSuggestedAdvices", async () => {
    try {
        const res = await axios.get(suggestedAdvRoute)
        return res.data
    }
    catch (error) {
        console.log(error.message)
    }
})
export const setSuggestedAdvice = createAsyncThunk("postSuggestAdv", async (adv) => {
    try {
        const res = await axios.post(suggestAdvRoute, adv)
        return console.log(res)
    } catch (error) {
        console.log(error.message)
    }
})
export const setAdvice = createAsyncThunk("postAdv", async (adv) => {
    try {
        const res = await axios.post(addAdvRoute, adv)
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
})
export const removeAdvice = createAsyncThunk("removeAdvice", async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3001/removeAdvice/${id}`)
        return console.log(res)
    } catch (error) {
        console.log(error.message)
    }
})

export const removeSugestedAdv = createAsyncThunk("removeSugestedAdv", async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3001/removeSuggestedAdvice/${id}`)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
})

const slice = createSlice({
    name: "advices",
    initialState: {
        advices: [],
        suggestedAdvice: [],
        isAdm: false
    },
    reducers: {
        admOn: (state, action) => {
            state.isAdm = true
        },
        admOff: (state, action) => {
            state.isAdm = false
        }
    },
    extraReducers: (build) => {
        build
            .addCase(getAdv.fulfilled, (state, action) => {
                return { ...state, advices: action.payload }
            })
            .addCase(getSuggestedAdvice.fulfilled, (state, action) => {
                return { ...state, suggestedAdvices: action.payload }
            })

    },
})
export const { admOn, admOff } = slice.actions
export default slice.reducer
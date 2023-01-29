import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const advRoute = "https://advice-app.onrender.com"

export const getAdv = createAsyncThunk("getAdvices", async () => {
    try {
        const res = await axios.get(advRoute)
        return res.data
    }
    catch (error) {
        console.log(error.message)
    }
})

export const setAdvice = createAsyncThunk("postAdv", async (adv) => {
    try {
        const res = await axios.post(`${advRoute}/addAdvice`, adv)
        console.log(res.status)
    } catch (error) {
        console.log(error.message)
    }
})

export const removeAdvice = createAsyncThunk("removeAdvice", async (id) => {
    try {
        const res = await axios.delete(`${advRoute}/removeAdvice/${id}`)
        return console.log(res.status)
    } catch (error) {
        console.log(error.message)
    }
})

const slice = createSlice({
    name: "advices",
    initialState: {
        advices: [],
        isAdm: false,
        hasMsg:false,
        msg:""
    },
    reducers: {
        admOn: (state, action) => {
            state.isAdm = true
        },
        admOff: (state, action) => {
            state.isAdm = false
        },
        showMsg: (state, action) => {
            state.hasMsg = true
        },
        hideMsg: (state, action) => {
            state.hasMsg = false
        },
        setMsg: (state, action) =>{
            state.msg = action.payload
        }
    },
    extraReducers: (build) => {
        build
            .addCase(getAdv.fulfilled, (state, action) => {
                return { ...state, advices: action.payload }
            })
    },
})
export const { admOn, admOff, showMsg, hideMsg, setMsg } = slice.actions
export default slice.reducer
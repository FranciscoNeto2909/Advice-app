import { configureStore } from "@reduxjs/toolkit";
import advReducer from "./adviceSlice"

export const store = configureStore({
    reducer:{ advices: advReducer }
})

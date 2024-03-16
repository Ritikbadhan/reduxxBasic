import { configureStore } from "@reduxjs/toolkit";
import todoslices from "../features/todo/todoslices";

export const store = configureStore({
    reducer:todoslices
})     
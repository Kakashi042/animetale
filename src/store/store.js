import { configureStore } from "@reduxjs/toolkit";
import AnimeSlice from "./AnimeSlice";

export const store = configureStore({
    reducer:{app:AnimeSlice}
})
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import themeReducer from "./reducers/themeReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

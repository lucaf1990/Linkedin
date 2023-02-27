import { configureStore } from "@reduxjs/toolkit";
import reducers from "./store";

export const store = configureStore({
  reducer: reducers,
});
export type RootState = ReturnType<typeof store.getState>;

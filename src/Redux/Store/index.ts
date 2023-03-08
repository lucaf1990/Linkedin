import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../Reducers";
import commentsReducer from "../Reducers/comments";
import homeReducer from "../Reducers/home";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import jobsReducer from "../Reducers/jobs";

const reducers = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  comments: commentsReducer,
  jobs: jobsReducer,
});

// export default reducers;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);

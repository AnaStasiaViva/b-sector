import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "services/PostService";

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
});

const setupStore = ()=> {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;

export const store = setupStore();

import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = () =>
//   combineReducers({
//     Start: ,
//   });

export const store = configureStore({
  reducer: {},
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

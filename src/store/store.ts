import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MoneyReducer from "../modules/MoneyReceiver/store/reducer";

const rootReducer = combineReducers({
  vendingMachineData: MoneyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

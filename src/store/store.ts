import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BanknotesReducer from "../modules/MoneyReceiver/store/banknotesReducer";
import ProductsReducer from "../modules/ProductsList/store/reducer";
import MoneyReducer from "../modules/MoneyReceiver/store/moneyReducer";

const rootReducer = combineReducers({
  banknotes: BanknotesReducer,
  products: ProductsReducer,
  moneyAmount: MoneyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BanknoteEnum,
  IBanknotesState,
} from "../../../store/types/banknoteTypes";
import { getRandomQuantity } from "../helpers/getRandomQuantity";

interface IAddBanknoteAction {
  banknote: BanknoteEnum;
  count: number;
}

// const initialState: IBanknotesState = {
//   [BanknoteEnum.OneThousand]: 0,
//   [BanknoteEnum.FiveHundred]: 0,
//   [BanknoteEnum.OneHundred]: 0,
//   [BanknoteEnum.Fifty]: 0,
//   [BanknoteEnum.Ten]: 0,
//   [BanknoteEnum.Five]: 0,
//   [BanknoteEnum.One]: 0,
// };

const initialState: IBanknotesState = {
  [BanknoteEnum.OneThousand]: getRandomQuantity(1, 28),
  [BanknoteEnum.FiveHundred]: getRandomQuantity(1, 17),
  [BanknoteEnum.OneHundred]: getRandomQuantity(1, 22),
  [BanknoteEnum.Fifty]: getRandomQuantity(1, 32),
  [BanknoteEnum.Ten]: getRandomQuantity(1, 10),
  [BanknoteEnum.Five]: getRandomQuantity(1, 51),
  [BanknoteEnum.One]: getRandomQuantity(1, 19),
};

export const BanknotesSlice = createSlice({
  name: "Banknotes",
  initialState,
  reducers: {
    addBanknote: (state, { payload }: PayloadAction<IAddBanknoteAction>) => {
      state[payload.banknote] = state[payload.banknote] + payload.count;
    },
    setBanknotes: (
      state,
      { payload }: PayloadAction<Partial<IBanknotesState>>
    ) => {
      return { ...state, ...payload };
    },
  },
});

export const { addBanknote, setBanknotes } = BanknotesSlice.actions;

export default BanknotesSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BanknoteEnum } from "../../../store/types/banknoteTypes";

interface IBanknotesState {
  [BanknoteEnum.OneThousand]: number;
  [BanknoteEnum.FiveHundred]: number;
  [BanknoteEnum.OneHundred]: number;
  [BanknoteEnum.Fifty]: number;
  [BanknoteEnum.Ten]: number;
  [BanknoteEnum.Five]: number;
  [BanknoteEnum.One]: number;
}

interface IAddBanknoteAction {
  banknote: BanknoteEnum;
  count: number;
}

const initialState: IBanknotesState = {
  [BanknoteEnum.OneThousand]: 0,
  [BanknoteEnum.FiveHundred]: 0,
  [BanknoteEnum.OneHundred]: 0,
  [BanknoteEnum.Fifty]: 0,
  [BanknoteEnum.Ten]: 0,
  [BanknoteEnum.Five]: 0,
  [BanknoteEnum.One]: 0,
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
      state = { ...state, ...payload };
    },
  },
});

export const { addBanknote, setBanknotes } = BanknotesSlice.actions;

export default BanknotesSlice.reducer;

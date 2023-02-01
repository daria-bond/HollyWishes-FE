import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../store/types/productTypes";
import { mockupProducts } from "../constants/constants";

const initialState: IProduct[] = [...mockupProducts];

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    decrementProductQuantity: (state, { payload }: PayloadAction<number>) => {
      return state.map((p) => {
        if (p.id === payload) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
    },
  },
});

export const { decrementProductQuantity } = ProductsSlice.actions;

export default ProductsSlice.reducer;

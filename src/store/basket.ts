import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBasketProduct, IProduct } from 'src/types';

export interface IInitialState {
  products: IBasketProduct[];
}

const initialState: IInitialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      console.log(action.payload)
      state.products = [...state.products, {
        product: action.payload,
        count: 1,
      }];
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;

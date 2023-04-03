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
      const nimadur = state.products.find(
        (elem) => elem?.product?._id === action.payload._id
      );
      if (nimadur?.product?._id) {
        nimadur.count++;
      } else {
        state.products = [
          ...state.products,
          {
            product: action.payload,
            count: 1,
          },
        ];
      }
    },
    minusProduct: (state, action: PayloadAction<IProduct>) => {
      const nimadur = state.products.find(
        (elem) => elem?.product?._id === action.payload._id
      );
      
      if (nimadur?.product?._id && nimadur?.count > 1) {
        nimadur.count--;
      } else {
        const index = state.products.findIndex(
          (elem) => elem?.product?._id === action.payload._id
        );
        state.products.splice(index, 1);
      }
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      const index = state.products.findIndex(
    
        (elem) => elem?.product?._id === action.payload._id
      );
      console.log(index)
      state.products.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, minusProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;

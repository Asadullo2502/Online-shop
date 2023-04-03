import { useDispatch } from 'react-redux';
import { basketSlice } from 'src/store/basket';
import { IProduct } from 'src/types';
import { Market } from './Market';



export class BasketModel extends Market {
  thisstore = basketSlice;
  constructor() {
    super();
  }
  addProduct(info: IProduct) {
    this.thisstore.actions.addProduct(info)
    console.log(this.thisstore);
  }
}

export default new BasketModel();

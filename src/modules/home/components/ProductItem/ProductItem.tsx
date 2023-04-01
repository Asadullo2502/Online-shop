import { useDispatch } from 'react-redux';
import { addProduct } from 'src/store/basket';
import { IProduct } from 'src/types';
import './ProductItem.scss';

type ProductItemType = {
  info: IProduct;
};

const ProductItem: React.FC<ProductItemType> = ({ info }) => {
  const dispatch = useDispatch()
  return (
    <div className="productItem">
      <div className="productItem-img">
        <img src={info?.picture} alt="" />
      </div>
      <div className="productItem-info">
        <span className="productItem-info__title">
          {info?.name} <span style={{ background: info?.color }}></span>
        </span>
        <span className="productItem-info__subtitle">{info?.price}</span>
        <p className="productItem-info__text">{info?.about}</p>
        <button onClick={() => {
          dispatch(addProduct(info))
        }}>Add</button>
      </div>
    </div>
  );
};

export default ProductItem;

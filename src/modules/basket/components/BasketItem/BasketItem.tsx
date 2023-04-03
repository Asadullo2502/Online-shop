import { useDispatch } from 'react-redux';
import { addProduct, minusProduct, removeProduct } from 'src/store/basket';
import { IBasketProduct } from 'src/types';
import './BasketItem.scss';

type BasketItemType = {
  info: IBasketProduct;
};

const BasketItem: React.FC<BasketItemType> = ({ info }) => {
  const dispatch = useDispatch();
  return (
    <div className="basketItem">
      <div className="basketItem-img">
        <img src={info?.product?.picture} alt="" />
      </div>
      <div className="basketItem-info">
        <span className="basketItem-info__title">
          {info?.product?.name}{' '}
          <span style={{ background: info?.product?.color }}></span>
        </span>
        <span className="basketItem-info__subtitle">
          {info?.product?.price}
        </span>
        <div className="basketItem-info__box">
          <p className="basketItem-info__text">{info?.product?.about}</p>
        </div>
      </div>
      <div className="basketItem-action">
        <div className="basketItem-action-buttons">
          <button
            onClick={() => {
              dispatch(minusProduct(info.product));
            }}
          >
            -
          </button>
          <span>{info?.count}</span>
          <button
            onClick={() => {
              dispatch(addProduct(info.product));
            }}
          >
            +
          </button>
        </div>
        <button className="basketItem-action_remove" onClick={() => {
					dispatch(removeProduct(info.product))
				}}>remove</button>
      </div>
    </div>
  );
};

export default BasketItem;

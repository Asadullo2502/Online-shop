import { useSelector } from 'react-redux';
import Main from 'src/components/layouts/Main/Main';
import { RootState } from 'src/store';
import BasketItem from './components/BasketItem/BasketItem';
import './styles/main.scss';

const Basket = () => {
  const products = useSelector((state: RootState) => state.basket.products)
  
  return (
    <Main title='Basket'>
      <div className="basket">
        <div className="basket-left">
          {products?.map((elem, index) => (
            <BasketItem info={elem} key={index}/>
          ))}
        </div>
        <div className="basket-right">

        </div>
      </div>
    </Main>
  );
};

export default Basket;

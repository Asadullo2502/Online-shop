import Main from 'src/components/layouts/Main/Main';
import data from 'src/database/data.json';
import ProductItem from './components/ProductItem/ProductItem';
import './styles/main.scss';

const Home = () => {
  return (
    <Main title="Home">
      <div className="home">
        {data?.map((elem, index) => (
          <ProductItem info={elem} key={index} />
        ))}
      </div>
    </Main>
  );
};

export default Home;

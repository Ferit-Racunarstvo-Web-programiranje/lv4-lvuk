import Navbar from './Navbar';
import Products from './Products';
import '../style/home.css';

const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <Products />
    </div>
  );
};
export default Home;

import Navbar from '../components/Navbar';
import Products from '../components/Products';
import '../css/home.css';

const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <Products />
    </div>
  );
};
export default Home;

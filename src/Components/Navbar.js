import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <img src={logo} alt='' />
      </div>
      <div className='nav-middle'>
        <h1>Fruit Shop</h1>
      </div>
      <div className='nav-right'>
        <Link to='cart'>Cart</Link>
      </div>
    </div>
  );
};
export default Navbar;

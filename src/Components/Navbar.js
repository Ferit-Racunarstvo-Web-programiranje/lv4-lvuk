import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/entypo/cart';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Navbar = () => {
  const { totalQty } = useContext(CartContext);
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <img src={logo} alt='' />
      </div>
      <div className='nav-middle'>
        <h1>Fruit Shop</h1>
      </div>
      <div className='nav-right'>
        <span>
          <Link to='/cart' className='navlink'>
            <Icon icon={cart} size={35} style={{ color: '#4c545c' }} />
          </Link>
        </span>
        <span className='no-of-products'>{totalQty}</span>
      </div>
    </div>
  );
};
export default Navbar;

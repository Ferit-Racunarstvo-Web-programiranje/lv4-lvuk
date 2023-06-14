import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='left-nav'>
        <img src={logo} alt='' className='logo' />
      </div>
      <div className='right-nav'>
        <Link to='/signup' className='nav-links'>
          SIGN UP
        </Link>
        <Link to='/login' className='nav-links'>
          LOGIN
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

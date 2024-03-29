import Navbar from '../components/Navbar';
import { Icon } from 'react-icons-kit';
import { ic_add } from 'react-icons-kit/md/ic_add';
import { ic_remove } from 'react-icons-kit/md/ic_remove';
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { shoppingCart, dispatch, totalPrice, totalQty } =
    useContext(CartContext);

  return (
    <>
      <Navbar />
      <>
        {shoppingCart.length !== 0 && <h1>Cart</h1>}
        <div className='cart-container'>
          {shoppingCart.length === 0 && (
            <>
              <div>No items in your cart</div>
              <div>
                <Link
                  to='/'
                  style={{
                    fontSize: '2em',
                    textDecoration: 'none',
                    color: '#f4948c',
                  }}
                >
                  Return to Home page
                </Link>
              </div>
            </>
          )}
          {shoppingCart &&
            shoppingCart.map((cart) => (
              <div className='cart-card' key={cart.ProductID}>
                <div className='cart-img'>
                  <img src={cart.ProductImage} alt='not found' />
                </div>

                <div className='cart-name'>{cart.ProductName}</div>

                <div className='cart-price-orignal'>${cart.ProductPrice}</div>

                <div
                  className='inc'
                  onClick={() =>
                    dispatch({ type: 'INC', id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={ic_add} size={24} />
                </div>

                <div className='quantity'>{cart.qty}</div>

                <div
                  className='dec'
                  onClick={() =>
                    dispatch({ type: 'DEC', id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={ic_remove} size={24} />
                </div>

                <div className='cart-price'>${cart.TotalProductPrice}</div>

                <button
                  className='delete-btn'
                  onClick={() =>
                    dispatch({ type: 'DELETE', id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={iosTrashOutline} size={24} />
                </button>
              </div>
            ))}
          {shoppingCart.length > 0 && (
            <div className='cart-summary'>
              <div className='cart-summary-heading'>Cart-Summary</div>
              <div className='cart-summary-price'>
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className='cart-summary-price'>
                <span>Total Quantity</span>
                <span>{totalQty}</span>
              </div>
              <Link to='/cashout' className='cashout-link'>
                <button
                  className='btn btn-success btn-md'
                  style={{ marginTop: 5 + 'px' }}
                >
                  Proceed
                </button>
              </Link>
            </div>
          )}
        </div>
      </>
    </>
  );
};
export default Cart;

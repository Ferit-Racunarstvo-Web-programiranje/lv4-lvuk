import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/config';

const Cashout = () => {
  const { shoppingCart, totalPrice, totalQty, dispatch } =
    useContext(CartContext);

  const nav = useNavigate();

  // defining state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cell, setCell] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const cashoutSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        name,
        email,
        cell,
        address,
        items: shoppingCart,
      };
      console.log(orderData);

      const docRef = await addDoc(collection(db, 'Orders'), orderData);

      console.log('Order saved with ID: ', docRef.id);

      setName('');
      setEmail('');
      setCell('');
      setAddress('');
      dispatch({ type: 'EMPTY' });
      setSuccessMsg(
        'Order placed successfully! You will be redirected to home page...'
      );
      setError('');
      setTimeout(() => {
        nav('/');
      }, 5000);
    } catch (error) {
      console.error('Error saving order: ', error);
      setError('Failed to place the order. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='container' style={{ width: '70%' }}>
        <br />
        <h2>Cashout Details</h2>
        <br />
        {successMsg && <div className='success-msg'>{successMsg}</div>}
        <form
          autoComplete='off'
          className='form-group'
          onSubmit={cashoutSubmit}
        >
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor='Cell No'>Phone Number</label>
          <input
            type='text'
            className='form-control'
            required
            onChange={(e) => setCell(e.target.value)}
            value={cell}
          />
          <br />
          <label htmlFor='Delivery Address'>Delivery Address</label>
          <input
            type='text'
            className='form-control'
            required
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <br />
          <label htmlFor='Price To Pay'>Price To Pay</label>
          <input
            type='text'
            className='form-control'
            required
            value={totalPrice.toFixed(2)}
            disabled
          />
          <br />
          <label htmlFor='Total No of Products'>Total No of Products</label>
          <input
            type='number'
            className='form-control'
            required
            value={totalQty}
            disabled
          />
          <br />
          <button type='submit' className='btn btn-success btn-md mybtn'>
            SUBMIT
          </button>
        </form>
        {error && <span className='error-msg'>{error}</span>}
      </div>
    </>
  );
};
export default Cashout;

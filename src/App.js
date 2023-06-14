import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import { ProductsContextProvider } from './context/ProductContext';
import { CartContextProvider } from './context/CartContext';
import Cart from './Pages/Cart';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <ToastContainer />

        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/add-products' element={<AddProduct />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};
export default App;

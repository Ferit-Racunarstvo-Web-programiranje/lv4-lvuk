import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import { ProductsContextProvider } from './context/ProductContext';

const App = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/add-products' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};
export default App;

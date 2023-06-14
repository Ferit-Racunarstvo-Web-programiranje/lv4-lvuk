import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import { ProductsContextProvider } from './global/ProductContext';

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

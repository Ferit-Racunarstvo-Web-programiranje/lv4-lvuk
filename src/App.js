import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add-products' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

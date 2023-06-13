import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
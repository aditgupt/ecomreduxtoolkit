import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "react-router-dom";
import Cart from './components/Cart';
import Header from './components/layout/Header';

function App() {
  

  return (
    
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Header from './layouts/header';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import Footer from './layouts/footer';
import AddProducts from './pages/addProducts';
import Detail from './pages/details';
import { useState } from 'react';
import Wishlest from './pages/wishlist';

function App() {
  const [wishlist, setWishlist] = useState([])
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home wishlist={wishlist} setWishlist={setWishlist}/>}/>
      <Route path="/addProducts" element={<AddProducts/>}/>
      <Route path="/details/:_id" element={<Detail/>}/>
      <Route path="/wishlist" element={<Wishlest wishlist={wishlist} setWishlist={setWishlist}/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

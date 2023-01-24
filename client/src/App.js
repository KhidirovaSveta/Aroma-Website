import './App.css';
import Header from './layouts/header';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import Footer from './layouts/footer';
import AddProducts from './pages/addProducts';
import Detail from './pages/details';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addProducts" element={<AddProducts/>}/>
      <Route path="/details/:_id" element={<Detail/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

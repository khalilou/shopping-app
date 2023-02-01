import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Shop } from "./Pages/shop";
import { Cart } from "./Pages/cart";


function App() {
  return (      

    <div className='App'>
      <>
        <Navbar />
          <Routes>
            <Route path='/' element={<Shop/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
      </>     
    </div>
  );
}

export default App;

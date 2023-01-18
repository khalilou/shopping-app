import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";


function App() {
  return (      

    <div className='App'>
      <>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
          </Routes>
      </>     
    </div>
  );
}

export default App;

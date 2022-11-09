import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "pages/Home";
import Login from "pages/Login";
import Dashboard from "pages/Dashaboard";
import Product from "pages/Product";
import CounterTest from "pages/Counter";

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/counter" element={<CounterTest/>} />
          
        </Routes>
        {/* <footer>Copyright - eCommerce shop 2022</footer> */}
      </BrowserRouter>
    </div>
  );
};
export default App;

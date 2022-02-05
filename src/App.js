import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import AddCard from "./components/addCard/AddCard";
import Header from './components/Header/Header.js';
import ScrollToTop from './components/ScrollToTop';
import Info from "./pages/About/Info/Info"
import Admin from "./pages/Admin/Admin";
import ViewCard from "./pages/viewCard/ViewCard";
import { useEffect, useState } from "react";
import Login from "./pages/Login/Login";

function App() {
  const [checkPages,setCheckPages] = useState(false)
  let token = localStorage.getItem("token")

  return (
      <BrowserRouter>
      {checkPages != true ? <Header/> : null}
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/elon_berish' element={<AddCard />} />
        <Route path="/about" element={<Info />}></Route>
        <Route path="/admin" element={<Admin setCheckPages={setCheckPages} token={token}/>}></Route>
        <Route path="/login" element={<Login setCheckPages={setCheckPages} />}></Route>
        <Route path="/ad/active/:id" element={<ViewCard />}></Route>
      </Routes>
      {checkPages != true ?   <Footer /> : null}
    </BrowserRouter>
    
    
  );
}

export default App;

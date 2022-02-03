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

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/elon_berish' element={<AddCard />} />
        <Route path="/about" element={<Info />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/ad/active/:id" element={<ViewCard />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

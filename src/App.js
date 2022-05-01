import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import {BrowserRouter ,Route,Routes } from "react-router-dom"
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Abount from './pages/Abount';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/menu" exact element={<Menu/>}/>
          <Route path="/about" exact element={<Abount/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

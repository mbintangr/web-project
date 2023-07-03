import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About'
import Recipes from './pages/Recipes'
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

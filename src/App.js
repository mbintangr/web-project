import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About'
import Recipes from './pages/Recipes'
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Foods from './pages/Foods';
import { recipes } from './data/data';

function App() {
  console.log(recipes);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Recipes" element={<Recipes />} />

          {recipes.map((item, index) => (
            <Route path={'/Recipes/' + item.id} element={<Foods obj={item} />}/>
          ))}

          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

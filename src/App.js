import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className=''>
        <Welcome />
      </main>
    </div>
  );
}

export default App;

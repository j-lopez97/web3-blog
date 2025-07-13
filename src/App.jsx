import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Log from './pages/log';
import About from './pages/about';
import Stack from './pages/stack';
import './App.css';

function App() {
  return (
    <Router>
      <header className="flex items-center justify-between w-full border-b bg-bathRed-500 p-4">
        <h1 className="text-xl font-sans text-spiritGold-100">Sovereign Signal</h1>
        <nav>
          <ul className="flex space-x-4 font-mono">
            <li><Link to="/home">home</Link></li>
            <li><Link to="/log">log</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/stack">stack</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/log" element={<Log />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </main>

      <footer className="flex items-center w-full bg-bathRed-500 border-t border-zinc-500 p-4 text-s 
      text-moss-100 font-mono">
        <p>signal end :: 7x2025</p>
      </footer>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import PastEvents from './components/PastEvents';
import './styles/general.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/leaderboard" element={<div style={{padding: '2rem', color: 'var(--text)'}}>Leaderboard page coming soon...</div>} />
          <Route path="/about" element={<div style={{padding: '2rem', color: 'var(--text)'}}>About page coming soon...</div>} />
          <Route path="/register" element={<div style={{padding: '2rem', color: 'var(--text)'}}>Register page coming soon...</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

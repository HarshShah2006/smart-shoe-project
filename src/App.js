import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import video from './assets/shoes.mp4';
import HomePage from './components/HomePage';
import heartbeat from './components/HeartBeat';
import HeartBeat from './components/HeartBeat';

// Home component (main page after the loader)
const Home = () => {
  return (
    <div >
      <HomePage />
    </div>
  );
};

// Loader component (will be shown for 35 seconds)
const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 35 seconds
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect to Home page
    }, 3600);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="body">
      <div className="image-container">
        <video className="fullscreen-video" src={video} autoPlay muted />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/heartbeat" element={<HeartBeat />} />
      </Routes>
    </Router>
  );
}

export default App;

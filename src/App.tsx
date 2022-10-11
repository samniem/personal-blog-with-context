import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Articles } from './components/Articles';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

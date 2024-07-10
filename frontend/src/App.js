import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import axios from 'axios';

import Home from './components/home'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
        <Router>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </Router>
      </div>
  );
}

export default App;
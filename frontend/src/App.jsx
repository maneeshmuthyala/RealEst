import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Friends from './components/friends';
import Notification from './components/Notification';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

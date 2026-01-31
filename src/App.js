import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import User from './Pages/User';
import AddUser from './Pages/AddUser ';
import UpdateUser from "./Pages/UpdateUser"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/newuser' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

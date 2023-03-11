import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Graphic from './pages/graphic/graphic';
import Video from './pages/video/video';
import Presentation from './pages/presentation/presentation';
import Navbar from './components/navbar/navbar';

const CostumeBrowserRouter = styled(BrowserRouter)`

   height: 100vh;
   display: flex;
   flex-direction: column;
   width: 100%;
`

const App = () => {
  return (
    <CostumeBrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/graphic" element={<Graphic />} />
      <Route path="/video" element={<Video />} />
      <Route path="/presentation" element={<Presentation />} />
    </Routes>
    </CostumeBrowserRouter>
  );
};

export default App;

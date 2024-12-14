import React from 'react';
import { Route,Routes,Link } from 'react-router';
import './App.css';
import Navbar from './component/Navbar';
import ContainerBody from './component/ContainerBody';
import UserAdd from './component/UserAdd';
import { CssBaseline } from '@mui/material';



function App() {
  return (
    <div >
      <CssBaseline />
      <Navbar/>
      <Routes>
        <Route path="/" element={<ContainerBody/>}/>
        <Route path="add" element={<UserAdd/>}/>
      
      
      </Routes>
      
    </div>
  );
}

export default App;

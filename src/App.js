import React from 'react';
import { Route,Routes,Link } from 'react-router';
import './App.css';
import Navbar from './component/Navbar';
import ContainerBody from './component/ContainerBody';
import UserAdd from './component/UserAdd';



function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<ContainerBody/>}/>
        <Route path="add" element={<UserAdd/>}/>
      
      
      </Routes>
      
    </div>
  );
}

export default App;

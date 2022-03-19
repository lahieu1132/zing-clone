import React, { useEffect, useState } from 'react';
import './App.css';
import SidebarLeft from './components/SidebarLeft'
import PlayerControler from './components/PlayerControler'
import Dashboard from "./components/Dashboard"
import Header from './components/Header'
import axios from 'axios';
import SidebarRight from './components/SidebarRight'

function App() {

  
  
  return (
    <div className='App w-screen overflow-hidden h-screen flex bg-[hsla(0,0%,100%,0.05)]'>
      <Header />
      <SidebarLeft />
      <Dashboard />
      <PlayerControler  />
      <SidebarRight  />
    </div>
  );
}

export default App;

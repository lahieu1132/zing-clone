import React, { useEffect, useState } from 'react';
import './App.css';
import SidebarLeft from './components/SidebarLeft'
import PlayerControler from './components/PlayerControler'
import Dashboard from "./components/Dashboard"
import Header from './components/Header'
import SidebarRight from './components/SidebarRight'
import {useAuth} from './context/AuthContext'
import {useControl} from './context/ControlContext'

function App() {
  const {currentUser} = useAuth()
  const {playing,songs} = useControl()
  const [showPlayer, setshowPlayer] = useState(false)
  console.log(showPlayer);
  
  useEffect(()=>{
    currentUser ? setshowPlayer(true) : setshowPlayer(false)
  },[currentUser])
  useEffect(()=>{
    setshowPlayer(true)
  },[songs])


  return (
    <div className='App w-screen overflow-hidden h-screen flex bg-[hsla(0,0%,100%,0.05)]'>
      <Header />
      <SidebarLeft showPlayer={showPlayer}/>
      <Dashboard />
      {showPlayer && <PlayerControler  />}
      <SidebarRight  />
    </div>
  );
}

export default App;

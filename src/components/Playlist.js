import React,{useEffect,useState} from "react";
import PlaylistItem from './PlaylistItem';
import {FaPlus} from 'react-icons/fa'
import {useData} from '../context/DataContext'

function Playlist() {
  
  const {myPlaylist} = useData()
  
  
  return (
  <div className="grid grid-cols-5 gap-6 mt-6">
    <div className="h-[240px] rounded-md flex flex-col items-center justify-center text-white text-5xl "
          style={{background:'linear-gradient(33deg,#5a1eae -7%,#ce267a 117%)'}}
        >
            <FaPlus />
            <span className="text-base">Tạo playlist mới</span>
    </div>
    {
      myPlaylist?.map((item,idx)=>(
        <PlaylistItem item={item} key={idx}/>
      ))
    }
  </div>
  )
}
export default Playlist;

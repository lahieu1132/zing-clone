import React, { useEffect, useState } from "react";
import { BsUpload , BsFillPlayFill} from 'react-icons/bs'
import {useData} from '../context/DataContext'
import {CgMusic} from 'react-icons/cg'
import {BsThreeDots} from 'react-icons/bs'
import {AiFillHeart } from 'react-icons/ai'
import axios from "axios";
import {useControl} from '../context/ControlContext'
import {FaPlay} from 'react-icons/fa'

function OverviewMusic() {
  
  const { handleSetCurrentSongIndex,currentSongIndex, playing, handleSetSongs,songs,handlePlay} = useControl()
  const {list,handleAddList,handleRemoveList } = useData()
  
  const checkedFilm = (id) => {
    return list?.songId?.indexOf(id) != -1
  }
  const handldeClick = async (film) => {
    await checkedFilm(film?.id) ?
    handleRemoveList(film) : handleAddList(film)   
}
  
  
  return <div className="mt-10 mb-24">
      <div className="flex flex-row gap-3 items-center justify-between">
        <h2 className="capitalize text-white text-xl font-[700]">Bài hát</h2>
        <div className="flex flex-row gap-3 ">
          <button className="px-4 py-1 uppercase bg-[#ffffff1a] rounded-2xl text-white text-sm font-medium flex flex-row items-center">
              <BsUpload />
              <span className="ml-2">Tải lên</span>
          </button>
          <button className="px-4 py-1 uppercase bg-[#7200a1] rounded-2xl text-white text-sm font-medium flex flex-row items-center">
            <BsFillPlayFill />
            <span className="ml-1">Phát tất cả</span>
          </button>
        </div>
      </div>
      <div className="uppercase flex flex-row text-xs text-[#ffffff80] font-medium p-[10px] h-12 text-left border-b items-center select-none border-b-[#ffffff0d]">
        <p className="flex-grow-0 w-1/2 mr-2 pl-6">bài hát</p>
        <p className="flex-grow-[1]">album</p>
        <p className="flex-grow-0">thời gian</p>
      </div>
      <div className="w-full flex flex-col items-start ">
        {
          list?.myList?.map((song,idx) => (
            <div key={idx} className='overview-music hover:bg-[#ffffff1a] border-b-[#ffffff0d] border-b rounded flex-grow w-full relative flex items-center h-[60px]'>
              <div className="overview-play-btn hidden justify-between items-center z-10 left-12 absolute  ">
                <button className=" rounded text-white flex justify-between items-center"
                  onClick={async () => {
                    if(checkedFilm(song?.id))
                    await handleSetSongs(list?.myList)
                    !playing && handlePlay()
                    handleSetCurrentSongIndex(idx)
                  }}
                >
                  <FaPlay />
                </button>
              </div>
              <div className="flex  flex-row items-center flex-grow">
                <div className="flex flex-row items-center w-1/2 mr-2">
                  <div className="flex flex-row items-center">
                    <div className="text-[#ffffff80] ml-2 h-5 w-5 flex items-center justify-center">
                        <label htmlFor="" className="bg-transparent hidden overview-music_checkbox">
                          <input  
                            type="checkbox" name="" id="" />
                        </label>
                        <div className="overview-music-icon"><CgMusic /></div>
                    </div>
                    <div className="relative ">
                      <img className="overview-img w-10 rounded m-2" src={song?.album?.cover_small || 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/6/a/6/e6a62ac1518091b3b304553f3fda494a.jpg'} alt="" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white text-sm font-medium ">{song?.title}</h2>
                    <p className="text-[#ffffff80] text-xs">{song?.artist?.name}</p>
                  </div>
                </div>
                <div className="flex-grow text-[#ffffff80] text-sm">
                  <h3>{song?.album?.title}</h3>
                </div>
                <div className="mr-4 flex flex-row gap-4 items-center">
                  <button className={`${checkedFilm(song?.id) ? 'text-[#7200a1]'  : 'text-white' }  text-lg `}
                    onClick={()=>{
                      handldeClick(song)
                    }}
                  >
                    <AiFillHeart />
                  </button>
                  <button className="mr-1 hidden overview-music_dots text-white p-[5px] rounded-full hover:bg-[#423a4b]">
                    <BsThreeDots />
                  </button>
                  <p className='overview-music_duration  text-xs text-[#ffffff80]'>{`${Math.floor(song?.duration/60) <=9 ? '0' : Math.floor(song?.duration/60)}${Math.floor(song?.duration/60)}:${song?.duration%60<=9 ? '0': ''}${Math.floor(song?.duration%60)}`}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
  </div>;
}
export default OverviewMusic;

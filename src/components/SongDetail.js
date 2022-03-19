import { useEffect, useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import { useControl } from "../context/ControlContext"
import {useData} from '../context/DataContext'
import {Link} from 'react-router-dom'

function SongDetail(props) {
    const { handleSetCurrentSongIndex,currentSongIndex, playing, handleSetSongs,songs,handlePlay} = useControl()
    const {list,handleAddList,handleRemoveList } = useData()
    
    const checkedFilm = (id) => {
      return list?.songId?.indexOf(id) != -1
    }
    const handldeClick = async (film) => {
      await checkedFilm(film?.id) ?
      handleRemoveList(film) : handleAddList(film)   
 }
  
  return (
    <div className={`relative sidebar-right_song-item cursor-pointer h-[60px] z-20 p-2 mr-2 rounded-md flex justify-start items-center ${props.song?.id == songs[currentSongIndex]?.id && !props.colorActive ? 'bg-[#7200a1] song-active' : props.song?.id == songs[currentSongIndex]?.id && 'bg-[#ffffff1a]' }`} 
                onDoubleClick={async ()=> {
                  if(checkedFilm(props.song?.id) && props.myList)
                   await handleSetSongs(list?.myList)
                  handleSetCurrentSongIndex(props.i)
                }}
              >
                <div className={`${currentSongIndex > props.i ? 'opacity-50' : 'opacity-100'} sidebar-right_song-main items-center flex-grow  flex flex-row z-10`}>
                  <div className='w-14 h-12 rounded-md flex flex-row flex-grow relative'>
                    <img className={`rounded-md ${playing && currentSongIndex == props.i && 'opacity-60'}`}
                    src={props.song?.album?.cover_small || 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/6/a/6/e6a62ac1518091b3b304553f3fda494a.jpg'} alt="" />
                    <div className="ml-4 flex flex-col items-start">
                      <h2 className='text-white text-sm font-semibold'>{props.song?.title?.slice(0,19) || 'ahjduias'} </h2>
                      {playing ? <p className='text-[#999] text-sm'>{props.song?.artist?.name || 'ahjduias'}</p> : 
                        <Link to={`/nghe-si/${songs[currentSongIndex]?.artist?.name}-${songs[currentSongIndex]?.artist?.id}`} className='text-[#999] text-sm hover:text-[#7200a1]'
                        >{songs[currentSongIndex]?.artist?.name}</Link>
                      }
                    </div>
                    {
                      playing && songs[currentSongIndex]?.id == props.song?.id  && (
                        <div className='song-playing absolute left-[14px] top-4'>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      )
                    }
                  </div>
                </div>
                <div className="sidebar-right_song-btn--play opacity-0 absolute left-0 h-full w-full flex justify-between items-center">
                  <div className="ml-6 text-white z-10">
                    { currentSongIndex !== props.i &&
                      <button 
                      onClick={async () => {
                        if(checkedFilm(props.song?.id))
                        await handleSetSongs(list?.myList)
                        !playing && handlePlay()
                        handleSetCurrentSongIndex(props.i)
                      }}
                    >
                      <FaPlay />
                    </button>
                    }
                  </div>
                  <div className="ml-4 z-20">
                      <button className={`${checkedFilm(props.song?.id) ? 'text-[red]'  : 'text-white' }  text-lg `}
                        onClick={()=>{
                          handldeClick(props.song)
                        }}
                      >
                          <AiFillHeart />
                      </button>
                      <button className='text-white text-lg rounded-full p-1 ml-2 hover:bg-[#9b9b9b]'>
                          <BsThreeDots />
                      </button>
                  </div>
                </div>
              </div>
  )
}
export default SongDetail;

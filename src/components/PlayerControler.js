import { useRef,useMemo,useState,useEffect } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {BsThreeDots, BsFillCaretLeftFill,BsVolumeMute,BsVolumeUp, BsVolumeDown,BsFillCaretRightFill} from 'react-icons/bs'
import {FaRandom, FaPlay, FaRegWindowRestore} from 'react-icons/fa'
import {IoMdPause} from 'react-icons/io'
import {ImLoop} from 'react-icons/im'
import {useControl} from '../context/ControlContext'
import {useData} from '../context/DataContext'
import {GiMicrophone} from 'react-icons/gi'
import {Link} from 'react-router-dom'

function PlayerControler() {
  const [currentTimeidx,setCurrentTime] = useState(0)
  const {list,handleAddList,handleRemoveList } = useData()
  const audioRef = useRef(1)

  const {SkipSong,currentSongIndex,
    playing,handlePlay,
    songs,loop,handleLoop,toggleRandom,random} = useControl()
    
    useEffect(() => {
        playing ? audioRef.current.play() : audioRef.current.pause();
      },
    [playing,currentSongIndex,songs]
    );
    const checkedFilm = (id) => {
      return list?.songId?.indexOf(id) != -1
    }
    const handldeClick = async (film) => {
      await checkedFilm(film?.id) ?
      handleRemoveList(film) : handleAddList(film)   
    }
  return ( 
    <div className="fixed bottom-0 left-0 right-0 h-[90px] z-40 flex flex-row justify-between items-center bg-[#120c1c] px-6">
        <audio ref={audioRef} src={songs[currentSongIndex]?.preview || 'https://tainhac123.com/listen/yeu-duong-kho-qua-thi-chay-ve-khoc-voi-anh-erik.B6rEC4ZEO7oD.html'}
          onTimeUpdate={(e)=>setCurrentTime(e.target.currentTime)}
          onEnded={(e)=>{
             !loop && SkipSong()
             e.target.play()
          }}
        ></audio>
        <div className='flex flex-row justify-start items-center w-[300px]'>
          <div className='w-[68px] rounded-md overflow-hidden'>
            <img src={songs[currentSongIndex]?.album?.cover_small} alt="" />
          </div>
          <div className="ml-4 ">
            <h2 className='text-white text-sm font-semibold'>{songs[currentSongIndex]?.title.slice(0,19)}</h2>
            <Link to={`/nghe-si/${songs[currentSongIndex]?.artist?.name}-${songs[currentSongIndex]?.artist?.id}`} className='text-[#999] text-sm hover:text-[#7200a1]'
            >{songs[currentSongIndex]?.artist?.name}</Link>
          </div>
          <div className="ml-4 flex flex-row">
              <button className={`${checkedFilm(songs[currentSongIndex]?.id) ? 'text-[#7200a1]'  : 'text-white' }  text-lg `}
                onClick={()=>{
                  handldeClick(songs[currentSongIndex])
                }}
              >
                  <AiFillHeart />
              </button>
               <button className='text-white text-lg rounded-full p-1 ml-2 hover:bg-[#9b9b9b]'>
                  <BsThreeDots />
              </button>
          </div>
        </div>
        <div className='flex-grow flex flex-col justify-center items-center'>
          <div className='w-full flex justify-center text-white mb-4'>
            <button className={`mx-5  ${random && 'text-[#7200a1]'}`}
              onClick={toggleRandom}
            >
              <FaRandom />
            </button>
            <button 
              onClick={()=>SkipSong(false)}
              className='mx-5 relative'>
              <span className='absolute left-[2px] top-[13px] h-[13px] w-[2px] bg-white'></span>
              <BsFillCaretLeftFill />
            </button>
            <button 
              onClick={()=>handlePlay(!playing)}
            className=' hover:text-[#7200a1] hover:border-[#7200a1] mx-5 p-[10px] border-2 rounded-full border-white '>
              {!playing ? <FaPlay /> : <IoMdPause />}
            </button>
            <button className='mx-5 relative' 
              onClick={SkipSong}
            >
              <BsFillCaretRightFill />
              <span className='absolute right-[3px] top-[13px] h-[13px] w-[2px] bg-white'></span>
            </button>
            <button className={`mx-5  ${loop && 'text-[#7200a1]'}`}
              onClick={handleLoop}
            >
              <ImLoop />
            </button>
          </div>
          <div className='flex flex-row items-center h-4 max-w-[750px] w-full '>
            <p className='text-xs text-[#999]'>{`${Math.floor(currentTimeidx/60) <=9 ? '0' : Math.floor(currentTimeidx/60)}${Math.floor(currentTimeidx/60)}:${Math.floor(currentTimeidx%60)<=9 ? '0': ''}${Math.floor(currentTimeidx%60)}`}</p>
            <input className='flex-grow h-1 bg-white mx-2' type="range" value={currentTimeidx}  min="0" max={songs[currentSongIndex]?.duration} 
              onChange={(e)=>{
                audioRef.current.currentTime = e.target.value
              }}
            />
            <p className='text-xs text-white'>{`${Math.floor(songs[currentSongIndex]?.duration/60) <=9 ? '0' : Math.floor(songs[currentSongIndex]?.duration/60)}${Math.floor(songs[currentSongIndex]?.duration/60)}:${songs[currentSongIndex]?.duration%60<=9 ? '0': ''}${Math.floor(songs[currentSongIndex]?.duration%60)}`}</p>
          </div>
        </div>
        <div className='flex flex-row text-white text-lg items-center gap-3'>
          <button className='px-[2px] text-white text-[10px] font-[700] rounded border '>
            MV
          </button>
          <button>
            <GiMicrophone />
          </button>
          <button>
            <FaRegWindowRestore />
          </button>
          <div className='flex flex-row items-center'>
            {audioRef.current.volume == 0 ? <BsVolumeMute /> : <BsVolumeUp />}
            <input type="range" min='0' 
              className='h-1'
              onChange={(e)=>{
              audioRef.current.volume = e.target.value/100
            }}
          max='100' name="" id="" />
          </div>
        </div>
    </div>
  )
}
export default PlayerControler
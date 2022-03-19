import { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsThreeDots,BsChevronRight} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import {useControl} from '../context/ControlContext'

function PlaylistRowSmall(props) {
    
    const {handleSetSongs,handleSetCurrentSongIndex} = useControl()

    const [lenght, setLength] = useState(()=>{
        if(window.innerWidth <= 1224) {
            return 6
        }
        return 7
    })
    useEffect(()=>{
        const event = ()=>{
            if(window.innerWidth <= 1224) {
                setLength(5)
            }
            else setLength(7)
        }
        window.addEventListener('resize', event)

        return ()=> window.removeEventListener('resize', event)
    },[window.innerWidth])
    
  return (

    <div className="w-full mt-10">
        <div className="text-white text-xl font-[700] flex justify-between items-center">
            <h1>{props.title}</h1>
            <button className='flex items-center hover:text-[#7e009f] uppercase text-sm font-medium text-[hsla(0,0%,100%,0.5)]'>
                <h2>Tất cả</h2>
                <BsChevronRight />
            </button>
        </div>
        <div className="my-6 flex flex-row justify-between">
            {
                props.playlistItems?.slice(0,lenght).map((song,idx)=>(
                <div className={`'w-[18%] xl:w-[14.28571%]' ${idx !== 0 && 'ml-6'}`} key={idx} >
                    <div className="playlist-song w-full] relative" >
                    <div className={`playlist-song-main overflow-hidden relative ${ props.circle ? 'rounded-full' : ' rounded-lg'}`}>
                        <img 
                            className="rounded-lg"
                            src={song.picture_medium} alt="" />
                        <div className="playlist-song-btn opacity-0 absolute top-1/2 z-10 -translate-y-1/2 flex w-full items-center justify-around">
                            {!props.circle && <button className='text-white text-xl'>
                                <AiOutlineHeart />
                            </button>}
                            <button className='border-2 text-white border-white p-4 rounded-full'
                                onClick={()=>{
                                    handleSetSongs(song.tracks?.data)
                                    handleSetCurrentSongIndex(0)
                                }}
                            >
                                <FaPlay />
                            </button>
                            {!props.circle &&  <button className='text-white text-xl rounded-full p-1 hover:bg-[#9b9b9b]'>
                                <BsThreeDots />
                            </button>}
                        </div>
                    </div>
                    {  props.radio &&
                        <div className='absolute left-1/2 -translate-x-1/2 -bottom-2 w-12 h-6 rounded-lg bg-[red] text-center text-white z-20'>
                        Live
                        </div>
                    }
                    </div>
                    <div>
                        <h3 className={`text-white text-sm font-bold capitalize mt-2 ${props.radio && 'text-center'}`}>{song.title}</h3>
                        {props.radio && 
                            <p className='text-[#75707c] text-xs text-center font-bold'>860 đang nghe</p>
                        }
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
  
  
}
export default PlaylistRowSmall;

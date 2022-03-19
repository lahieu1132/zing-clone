import { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsThreeDots,BsChevronRight} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import {useControl} from '../context/ControlContext'

function PlaylistRowBig(props) {
    const {handleSetSongs,handleSetCurrentSongIndex} = useControl()

    const [lenght, setLength] = useState(()=>{

        if(window.innerWidth <= 1224) {
            return 4
        }
        return 5
    })

    useEffect(()=>{
        const event = ()=>{

             if(window.innerWidth <= 1224) {
                setLength(4)
            }
            else setLength(5)
        }
        window.addEventListener('resize', event)

        return ()=> window.removeEventListener('resize', event)
    },[window.innerWidth])

  return (

    <div className="w-full mt-10">
        <div className="text-white text-xl capitalize font-[700] flex justify-between items-center">
            <h1>{props.title}</h1>
        </div>
        <div className="my-6 w-full grid grid-cols-4 lg:grid-cols-5 gap-8">
            {
                props.playlistItems?.slice(0,lenght).map((song,idx)=>(
                <div className='w-full' key={idx}>
                    <div className="playlist-song w-full] relative" >
                        <div className="playlist-song-main w-full rounded-lg overflow-hidden relative">
                            <img 
                                className="rounded-lg w-full"
                                src={song.picture_medium} alt="" />
                            <div className="playlist-song-btn opacity-0 absolute top-1/2 z-10 -translate-y-1/2 flex w-full items-center justify-around">
                                <button className='text-white text-xl'>
                                    <AiOutlineHeart />
                                </button>
                                <button className='border-2 text-white border-white p-4 rounded-full'
                                    onClick={()=>{
                                        handleSetSongs(song.tracks?.data)
                                        handleSetCurrentSongIndex(0)
                                    }}
                                >
                                    <FaPlay />
                                </button>
                                <button className='text-white text-xl rounded-full p-1 hover:bg-[#9b9b9b]'>
                                    <BsThreeDots />
                                </button>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-white text-sm font-bold mt-1'>{song.title}</h3>
                </div>
                ))
            }
        </div>
    </div>
  )
  
  
}
export default PlaylistRowBig;

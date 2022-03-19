import {AiOutlineHeart} from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
import {useControl} from '../context/ControlContext'

function PlaylistItem(props) {
    const {handleSetSongs,handleSetCurrentSongIndex} = useControl()
    

  return (
    <div className='w-full ' >
        <div className="playlist-song w-full] relative" >
        <div className={`playlist-song-main overflow-hidden relative ${ props.circle ? 'rounded-full' : ' rounded-lg'}`}>
            <img 
                className="rounded-lg"
                src={props.item?.picture_medium} alt="" />
            <div className="playlist-song-btn opacity-0 absolute top-1/2 z-10 -translate-y-1/2 flex w-full items-center justify-around">
                {!props.circle && <button className='text-white text-xl'>
                    <AiOutlineHeart />
                </button>}
                <button className='border-2 text-white border-white p-4 rounded-full'
                    onClick={()=>{
                        handleSetSongs(props.item?.tracks?.data)
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
            <h3 className={`text-white text-sm font-bold mt-2 capitalize ${props.radio && 'text-center'}`}>{props.item?.title}</h3>
            {props.radio && 
                <p className='text-[#75707c] text-xs text-center font-bold'>860 đang nghe</p>
            }
        </div>
    </div>
  )
}
export default PlaylistItem;

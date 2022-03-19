import React, { useEffect,useState,useRef } from "react"
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft,HiSearch} from 'react-icons/hi'
import {AiOutlineSkin, AiFillSetting} from 'react-icons/ai'
import {FcVip} from 'react-icons/fc'
import {BsUpload} from 'react-icons/bs'
import {FaUser,FaPlay} from 'react-icons/fa'
import {useAuth} from '../context/AuthContext'
import {CgArrowTopRight} from 'react-icons/cg'
import axios from "axios"
import {useControl} from '../context/ControlContext'
import {useNavigate } from 'react-router-dom'

function Header() {

    const [focus, setFocus] = useState(false)
    const [valueSearch, setValueSearch] = useState('')
    const [result, setResult] = useState([])
    const {signInWithGoogle,currentUser} = useAuth()
    const SearchRef = useRef();
    const inputRef = useRef();
    const resultRef = useRef();
    const {handleSetSongs,handleSetCurrentSongIndex,currentSongIndex,playing} = useControl()
    const navigate = useNavigate() 

    const handleFocus = () => {
        setFocus(true)
    }
    const handleBlur = () =>{
        setFocus(false)
    }

    const handleSign = () => {
        currentUser ? navigate('/ca-nhan') : signInWithGoogle()
    }
    const onChange = (e) => {
        e.preventDefault();
        setValueSearch(e.target.value)
        const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: e.target.value},
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '711e209100mshbd675643663a4cdp1b244ejsnb94287ceb2c2'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            
            if(!response.data.error) setResult(response.data.data)
            else setResult([])
        })
    }
    window.onclick = function(event) {
        if (event.target !== resultRef.current && event.target !== inputRef.current) {
            handleBlur()
        }
      }

  return (
    <div className="flex z-50 h-[70px] fixed left-[70px] right-14 xl:right-[330px] lg:left-60 top-0 bg-[#170f23]  xl:pr-14 pl-14">
            <div className="flex items-center flex-grow">
                <button className="text-2xl text-white mr-4"
                    onClick={()=>navigate(-1)}
                >
                    <HiOutlineArrowNarrowLeft />
                </button>
                <button className="text-2xl text-white mr-4"
                    onClick={()=>navigate(1)}
                >
                    <HiOutlineArrowNarrowRight />
                </button>
                <div className={`relative w-[65%] flex items-center text-[white] rounded-t-3xl ${focus && 'bg-[#432275]'}`}
                    ref={SearchRef}
                >
                    <button className="absolute left-2 text-2xl z-10"
                    >
                        <HiSearch />
                    </button>
                    <input
                        ref={inputRef}
                        className={`"w-full flex-grow min-w-[300px] py-2 text-sm  ${focus ? 'bg-[#432275]' : 'bg-[#312739]'} font-[600] pl-10 text-white rounded-3xl  outline-none "`}
                        type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
                        onChange={(e)=>onChange(e)}
                        onFocus={handleFocus}
                        />
                    <div  
                        ref={resultRef}
                    className={`absolute resultRef  ${focus ? 'block' : 'hidden' } top-[36px] p-3 left-0 w-full bg-[#432275] rounded-b-3xl`}>
                        <ul>   
                            <h2 className="text-sm font-bold pl-2">Đề xuất cho bạn</h2>
                            {
                                result?.length > 0 ? (
                                    <div>
                                        {
                                            result?.slice(0,5).map((song,i) =>(
                                                <div className={`relative sidebar-right_song-item h-14 z-10 p-2 mr-2 rounded-md flex justify-start items-center  }`} key={i}>
                                                <div className={` sidebar-right_song-main items-center flex-grow  flex flex-row z-10`}>
                                                <div className='w-14 h-12 rounded-md flex flex-row flex-grow relative'>
                                                    <img className={`rounded-md ${playing && currentSongIndex == i && 'opacity-60'}`}
                                                    src={song?.album?.cover_small || 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/6/a/6/e6a62ac1518091b3b304553f3fda494a.jpg'} alt="" />
                                                    <div className="ml-4 flex flex-col items-start">
                                                    <h2 className='text-white text-sm font-semibold'>{song?.title?.slice(0,19) || 'ahjduias'} </h2>
                                                    <p className='text-[#999] text-sm'>{song?.artist?.name || 'ahjduias'}</p>
                                                    </div>
                                                    {/* {
                                                    playing && currentSongIndex == 0  && (
                                                        <div className='song-playing absolute left-[14px] top-4'>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        </div>
                                                    )
                                                    } */}
                                                </div>
                                                </div>
                                                <div className="sidebar-right_song-btn--play opacity-0 absolute left-0 h-full w-full flex justify-between items-center">
                                                <div className="ml-6 text-white z-20">
                                                    <button
                                                        onClick={async() => {
                                                            await handleSetSongs([song])
                                                            await handleSetCurrentSongIndex(0)
                                                            handleBlur()
                                                        }}
                                                    >
                                                    <FaPlay />
                                                    </button>
                                                </div>
                                                
                                                </div>
                                            </div>
                                            ))
                                        }
                                    </div>
                                ) 
                                :
                                
                                    <div>
                                <li className=" text-[#ffffff80] gap-1 flex flex-row items-center py-3 px-2">
                                    <CgArrowTopRight />
                                <span className="text-sm  text-white font-medium">đơn phương</span> 
                                </li>
                                <li className=" text-[#ffffff80] gap-1 flex flex-row items-center py-3 px-2">
                                <CgArrowTopRight />
                                    <span className="text-sm text-white  font-medium">người yêu tôi</span>
                                </li>
                                <li className=" text-[#ffffff80] gap-1 flex flex-row items-center py-3 px-2">
                                <CgArrowTopRight />
                                    <span className="text-sm text-white  font-medium">#zingchart</span>
                                </li>
                                <li className=" text-[#ffffff80] gap-1 flex flex-row items-center py-3 px-2">
                                <CgArrowTopRight />
                                    <span className="text-sm text-white  font-medium">zing choice</span>
                                </li>
                                </div>
                                
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <button className="w-9 h-9 text-xl ml-3 text-white rounded-full bg-[#312739] hover:bg-[#2d2537] flex items-center justify-center" >
                    <AiOutlineSkin  />
                </button>
                <button className="w-9 h-9 text-xl ml-3 text-white rounded-full bg-[#312739] hover:bg-[#2d2537] flex items-center justify-center" >
                    <FcVip  />
                </button>
                <button 
                    // onClick={!currentUser && signInWithGoogle}
                className="w-9 h-9 text-xl ml-3 text-white rounded-full bg-[#312739] hover:bg-[#2d2537] flex items-center justify-center" >
                    <BsUpload  />
                </button>
                <button 
                className="w-9 h-9 text-xl ml-3 text-white rounded-full bg-[#312739] hover:bg-[#2d2537] flex items-center justify-center" 
                >
                    <AiFillSetting  />
                </button>
                <button 
                className="w-9 h-9 text-xl ml-3 text-white rounded-full bg-[#312739] hover:bg-[#2d2537] flex items-center justify-center" 
                    onClick={handleSign}                
                >
                    {currentUser ?  
                        <img src={currentUser.photoURL} alt="" className="rounded-full"/>
                    
                    : <FaUser  />} 
                </button>
            </div>
    </div>
  )
}
export default Header
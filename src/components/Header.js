import React, { useEffect,useState,useRef } from "react"
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft,HiSearch} from 'react-icons/hi'
import {AiOutlineSkin,AiOutlineFileText, AiFillSetting,AiOutlineInfoCircle} from 'react-icons/ai'
import {FcVip,FcCancel} from 'react-icons/fc'
import {BsUpload,BsTelephone,BsPlayCircle, BsChevronRight} from 'react-icons/bs'
import {FaUser,FaPlay} from 'react-icons/fa'
import {useAuth} from '../context/AuthContext'
import {CgArrowTopRight} from 'react-icons/cg'
import axios from "axios"
import {useControl} from '../context/ControlContext'
import {useNavigate } from 'react-router-dom'
import {MdOutlineHighQuality, MdSecurity} from 'react-icons/md'
import {FiFlag} from 'react-icons/fi'
import {RiAdvertisementLine} from 'react-icons/ri'
import Modal from "./Modal"
import {GrClose} from 'react-icons/gr'

function Header() {

    const [focus, setFocus] = useState(false)
    const [valueSearch, setValueSearch] = useState('')
    const [modalDisplay, setModalDisplay] = useState(false)
    const [settingShow, setSettingShow] = useState(false)
    const [result, setResult] = useState([])
    const {signInWithGoogle,currentUser} = useAuth()
    const SearchRef = useRef();
    const inputRef = useRef();
    const resultRef = useRef();
    const {handleSetSongs,handleSetCurrentSongIndex,currentSongIndex,playing} = useControl()
    const navigate = useNavigate() 
    const menuSettingRef = useRef()

    const handleFocus = (e) => {
        e.stopPropagation()
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
    
    useEffect(()=>{
        
        },[])
        window.onclick = function(){
            focus && setFocus(false)
            if(settingShow) setSettingShow(false)

        }
        
  return (
    <div className="flex z-50 h-[70px] fixed left-[70px] pr-14 xl:right-[330px] lg:left-60 right-0 top-0 bg-[#170f23]  xl:pr-14 pl-14">
            {modalDisplay && <Modal setModalDisplay={setModalDisplay} >
                    <div className="w-2/3 xl:w-1/2 h-[596px] flex flex-col rounded-lg p-8 bg-[#432275] overflow-hidden">
                        <div className="flex justify-between pb-2">
                            <h1 className="text-2xl font-bold text-white">Giao Di???n</h1>
                            <button className="text-2xl text-white"
                                onClick={()=>setModalDisplay(false)}
                            >
                                <GrClose />
                            </button>
                        </div>
                       <div className="w-full h-full overflow-y-scroll">
                            <div className="mt-3">
                                <h2 className="text-white text-lg  my-2 font-bold">Dynamic</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/London-thumb.png" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">London</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/dynamic-light-dark-1.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">S??ng t???i</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/dynamic-blue.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Xanh Da Tr???i</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/dynamic-pink.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">H???ng</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/dynamic-brown.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">N??u</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="mt-3">
                                <h2 className="text-white text-lg  my-2 font-bold">Ch??? ?????</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/zma.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Zing Music Awards</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/eiffel.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Th??p Eiffel</p>
                                    </div>
                                   
                                </div>
                                
                            </div>
                            <div className="mt-3">
                                <h2 className="text-white text-lg  my-2 font-bold">Ngh??? S??</h2>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jack.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Jack</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">IU</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/ji-chang-wook.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Ji Chang Wook</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/lisa.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Lisa</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jennie.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Jennie Kim</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jisoo.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Jisoo</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/rose.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Ros??</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="mt-3">
                                <h2 className="text-white text-lg  my-2 font-bold">M??u T???i</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/dark.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">T???i</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/purple.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">T??m</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/blue.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Xanh ?????m</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/blue-light.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">Xanh Bi???n</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/red.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">?????</p>
                                    </div>
                                    <div className="rounded overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                                <button className="text-white py-1 px-4 bg-[#7200a1] text-xs font-normal rounded-2xl">??p d???ng</button>
                                            </div>
                                            <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/pink.jpg" alt="" />
                                        </div>
                                        <p className="text-white font-medium text-xs mt-1">H???ng</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                       </div>
                    </div>
                </Modal>}
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
                        type="text" placeholder="Nh???p t??n b??i h??t, ngh??? s?? ho???c MV..."
                        onChange={(e)=>onChange(e)}
                        onFocus={(e)=>handleFocus(e)}
                        onClick={(e)=>e.stopPropagation()}
                        />
                    <div  
                        ref={resultRef}
                        onClick={(e)=>{e.stopPropagation()}}
                    className={`absolute resultRef  ${focus ? 'block' : 'hidden' } top-[36px] p-3 left-0 w-full bg-[#432275] rounded-b-3xl`}>
                        <ul>   
                            <h2 className="text-sm font-bold pl-2">????? xu???t cho b???n</h2>
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
                                <span className="text-sm  text-white font-medium">????n ph????ng</span> 
                                </li>
                                <li className=" text-[#ffffff80] gap-1 flex flex-row items-center py-3 px-2">
                                <CgArrowTopRight />
                                    <span className="text-sm text-white  font-medium">ng?????i y??u t??i</span>
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
                <button className="w-9 h-9 text-xl ml-3 text-white rounded-full bg-[#312739] hover:bg-[#2d2537] flex items-center justify-center" 
                    onClick={()=>setModalDisplay(true)}
                >
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
               <div className="relative">
                <button 
                    className="w-9 h-9 text-xl ml-3 text-white rounded-full bg-[#312739] hover:bg-[#2d2537] flex items-center justify-center" 
                            onClick={(e)=>{
                                e.stopPropagation()
                                setSettingShow(!settingShow)
                            }}
                    >
                        <AiFillSetting  />
                    </button>
                {settingShow && <div ref={menuSettingRef} className="menuSettingRef absolute flex bg-[#432275] rounded-lg mt-4 top-full right-0 flex-col w-[240px]  items-center justify-center"
                    onClick={(e)=>e.stopPropagation()}
                >
                    <ul className="w-full py-[10px] border-b border-[#ffffff1a]">
                        <li className="cursor-pointer hover:bg-[#ffffff1a] flex flex-row pl-5 pr-4 py-3 w-full items-center text-xl font-medium text-[#dadada]">
                            <FcCancel />
                            <span className="text-sm ml-2 flex-grow">Danh s??ch ch???n</span>
                        </li>
                        <li className="cursor-pointer hover:bg-[#ffffff1a] flex flex-row pl-5 pr-4 py-3 w-full items-center text-xl font-medium text-[#dadada]">
                            <MdOutlineHighQuality />
                            <span className="text-sm ml-2 flex-grow">Ch???t l?????ng nh???c</span>
                            <BsChevronRight />
                        </li>
                        <li className="cursor-pointer hover:bg-[#ffffff1a] flex flex-row pl-5 pr-4 py-3 w-full items-center text-xl font-medium text-[#dadada]">
                            <BsPlayCircle />
                            <span className="text-sm ml-2 flex-grow">Giao di???n</span>
                            <BsChevronRight />
                        </li>
                        <li className="cursor-pointer hover:bg-[#ffffff1a] flex flex-row pl-5 pr-4 py-3 w-full items-center text-xl font-medium text-[#dadada]">
                            <FcVip />
                            <span className="text-sm ml-2 flex-grow">Mua code VIP</span>
                        </li>
                    </ul>
                    <ul className="w-full py-[10px]">
                        <li className="cursor-pointer hover:bg-[#ffffff1a] hover:text-[#dadada] flex flex-row items-center gap-2 text-lx pl-5 pr-4 py-3 w-full text-[#ffffff80]">
                            <AiOutlineInfoCircle />
                            <span className="text-sm">Gi???i thi???u</span></li>
                        <li className="cursor-pointer hover:bg-[#ffffff1a] hover:text-[#dadada] flex flex-row items-center gap-2 text-lx pl-5 pr-4 py-3 w-full text-[#ffffff80]">
                            <FiFlag />
                            <span className="text-sm">G??p ??</span></li>
                        <li className="cursor-pointer hover:bg-[#ffffff1a] hover:text-[#dadada] flex flex-row items-center gap-2 text-lx pl-5 pr-4 py-3 w-full text-[#ffffff80]">
                            <BsTelephone />
                            <span className="text-sm">Li??n h???</span></li>
                        <li className="cursor-pointer hover:bg-[#ffffff1a] hover:text-[#dadada] flex flex-row items-center gap-2 text-lx pl-5 pr-4 py-3 w-full text-[#ffffff80]">
                            <RiAdvertisementLine />
                            <span className="text-sm">Qu???ng c??o</span></li>
                        <li className="cursor-pointer hover:bg-[#ffffff1a] hover:text-[#dadada] flex flex-row items-center gap-2 text-lx pl-5 pr-4 py-3 w-full text-[#ffffff80]">
                            <AiOutlineFileText />
                            <span className="text-sm">Th???a thu???n s??? d???ng</span></li>
                        <li className="cursor-pointer hover:bg-[#ffffff1a] hover:text-[#dadada] flex flex-row items-center gap-2 text-lx pl-5 pr-4 py-3 w-full text-[#ffffff80]">
                            <MdSecurity />
                            <span className="text-sm">Ch??nh s??ch b???o m???t</span></li>
                    </ul>
                </div>}
               </div>
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
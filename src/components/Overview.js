import React, { useEffect, useState } from "react";
import {BsChevronRight,BsUpload,BsFillPlayFill} from 'react-icons/bs'
import {FaPlus} from 'react-icons/fa'
import SongDetail from "./SongDetail";
import {useData} from '../context/DataContext'
import PlaylistItem from './PlaylistItem'
import { Link } from "react-router-dom";

const imgs = ['https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg',
  'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/0/1/5/1/0151bcc5dc64312a9b6d9d2245aab54c.jpg',
  'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/a/c/4/c/ac4c90ddaddc5fcf6c565d59400e7f7c.jpg',
  'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/a/9/b/d/a9bdcd0b7a87e4d56ae5e8d6f5dd50cd.jpg',
  'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/6/8/0/0/680092f4a309656e37c6bc8b6a0479f5.jpg',
  'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/4/e/6/74e6e8def48999e1408bcd8f29fc5b12.jpg'
]
function Overview() {


  const [slide2, setSlide2] = useState(1)
  const [slide3, setSlide3] = useState(2)
  const [lenght, setLenght] = useState(5)
  const {list,myPlaylist} = useData()
  

  useEffect(()=>{
    const timer =  () => {
         if(slide3 < imgs.length){
           setSlide2(slide3)
          setSlide3(slide3 + 1)
        } 
        else {
          setSlide2(slide3)
          setSlide3(0)
        }
    }
    setTimeout(timer, 2000)

    return ()=> window.clearTimeout(timer)
  },[slide3])

  useEffect(()=>{

    const event = ()=>{
      if(window.innerWidth <= 1224) {
        setLenght(4)
      }
      else setLenght(5)
  }
    window.addEventListener('resize',event )

  return ()=> window.removeEventListener('resize', event)
  },[window.innerWidth])

  
  return <div className="mb-2">
    <div className=" mt-10 ">
      <div className="flex flex-row justify-between">
          <h2 className=" text-white font-bold text-xl capitalize">Bài hát</h2>
          <div className="flex flex-row gap-3 items-center">
            <Link to='/ca-nhan/music' className="text-[#ffffff80] hover:text-[#7200a1] uppercase text-sm font-medium flex flex-row items-center">
              <span className="mr-1">Tất cả</span>
              <BsChevronRight />  
            </Link>
            <button className="px-4 py-1 uppercase bg-[#ffffff1a] rounded-2xl text-white text-sm font-medium flex flex-row items-center">
              <BsUpload />
              <span className="ml-2">Tải lên</span>
            </button>
            <button className="px-4 py-1 uppercase bg-[#7200a1] hover:brightness-90 rounded-2xl text-white text-sm font-medium flex flex-row items-center">
              <BsFillPlayFill />
              <span className="ml-1">Phát tất cả</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-row justify-between">
          <div className="w-[270px] h-[230px] mr-8 hidden lg:block">
            <ul className="songs-animate-container ml-40px relative hidden lg:block">
              {imgs.map((i,idx) => (
                <li key={idx} className={`song-animate-item ${slide2 !== idx && slide3 !== idx && 'three'} ${slide2 == idx && 'second'} ${slide3 == idx && 'first'} `}>
                  <img src={i} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[228px] overflow-y-scroll flex-grow text-center">
              <ul className="flex flex-col ">
                {
                  list?.myList?.slice(0,20).map((song,i) => (
                    <SongDetail song={song} colorActive i={i} key={i} myList/>
                  ))
                }
              </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-10">
        <h2 className=" text-white font-bold text-xl capitalize">Playlist</h2>
        <div className="flex flex-row gap-3 items-center">
          <button className="text-[#ffffff80] hover:text-[#7200a1] uppercase text-sm font-medium flex flex-row items-center">
            <Link to='/ca-nhan/playlist' className="mr-1">Tất cả</Link>
            <BsChevronRight />  
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 xl:grid-cols-5 gap-6 mt-6  ">
        <div className="h-[240px] rounded-md flex flex-col items-center justify-center text-white text-5xl "
          style={{background:'linear-gradient(33deg,#5a1eae -7%,#ce267a 117%)'}}
        >
            <FaPlus />
            <span className="text-base">Tạo playlist mới</span>
        </div>
        {
          myPlaylist?.slice(0,lenght-1).map((item,idx)=>(
            <PlaylistItem item={item} key={idx}/>
          ))
        }
      </div>
  </div>;
}
export default Overview;

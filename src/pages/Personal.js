import React,{useState,useRef,useEffect} from "react";

import {NavLink,Outlet} from 'react-router-dom'
import {BsThreeDots,BsArrowRightSquare} from 'react-icons/bs'
import {useAuth} from '../context/AuthContext'


function Personal() {
  const {currentUser, signInWithGoogle, handleSignOut} = useAuth()
  const [signOutForm, setSignOutForm] = useState(false)
  const signOutFormRef = useRef();
  
  useEffect(() => {
    const handleClick = ()=>{
      signOutForm && setSignOutForm(false)
    }
    // window.addEventListener('click',handleClick)
  
    // return () => {
    //   window.removeEventListener('click',handleClick);
    // };
    window.onclick = function(){
      handleClick()
  }
  }, []);
  

  return (
    <div className="pt-20 px-14 overflow-y-scroll  h-full">
      {
        currentUser ? (
          <>
            <div className="h-[200px]">
              <div className="w-full h-full flex flex-col items-end"
                style={{backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,0),#170f23)"}}
              > 
                  <div className='flex flex-row w-full justify-end items-start'>
                    <div className='relative'>
                      <img
                        className='rounded-full w-[100px]'
                        src={currentUser?.photoURL} alt="" />
                    </div>
                    <div className='ml-32 flex '>
                      <button className='py-1 px-4 rounded-2xl text-sm uppercase bg-[#ffdb00] hover:bg-[#e5c500]'>Nâng cấp vip</button>
                      <button className='py-1 px-4 rounded-2xl text-sm uppercase text-white mx-2 bg-[#ffffff1a]'>Nhập code vip</button>
                     <div className='relative'>
                        <button className='text-white text-lg p-1 rounded-full bg-[#ffffff1a]'
                            onClick={(e)=>{
                              e.stopPropagation()
                              setSignOutForm(!signOutForm)
                            }}
                          >
                            <BsThreeDots/>
                        </button>
                        {signOutForm && <button ref={signOutFormRef} className=' absolute flex  flex-row items-center bg-[#432275] rounded-md mt-1 p-3 gap-2 text-white text top-full right-0 w-[210px] h-11'
                          onClick={(e)=>{
                            e.stopPropagation()
                            handleSignOut()
                          }} 
                        >
                          <BsArrowRightSquare />
                          <span>Đăng xuất</span>
                          </button>}
                     </div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <h2 className='text-center w-full  mt-4 text-[32px] tracking-wide font-[700] text-white'>
                    {currentUser?.displayName} </h2>
                  </div>
              </div>
            </div>
            <nav className='flex justify-center h-[32px] items-center'>
              <ul className='personal-navbar flex flex-row  items-center p-[3px] bg-[#2f2739] rounded-xl uppercase text-sm font-[400] text-white'>
                <NavLink activeclassname='active' to='/ca-nhan' className='px-5 py-[2px] rounded-xl '>Tổng quan</NavLink>
                <NavLink activeclassname='active' to='/ca-nhan/music' className='px-5 py-[2px] rounded-xl '>Bài Hát</NavLink>
                <NavLink activeclassname='active' to='/ca-nhan/playlist' className='px-5 py-[2px] rounded-xl '>Playlist</NavLink>
                <NavLink activeclassname='active' to='/ca-nhan/podcast' className='px-5 py-[2px] rounded-xl '>Podcast</NavLink>
                <li to='/' className='px-5 py-[2px] '><BsThreeDots/></li>
              </ul>
            </nav>
            <Outlet />
          </>
        ) : (
          <div className='w-full h-full flex flex-col gap-4 items-center justify-center pb-56'>
            <div className='w-28 h-28' 
              style={{backgroundImage:'url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/record-dark.svg)',
                  backgroundSize:'cover'
            }}
            ></div>
            <h2 className='text-[#ffffff80] font-medium text-base'>Vui lòng đăng nhập để sử dụng dịch vụ</h2>
            <button className='text-white py-[6px] px-5 bg-[#7200a1] hover:brightness-90 rounded-3xl uppercase text-base' 
              onClick={()=>signInWithGoogle()}
            >
              Đăng nhập ngay
            </button>
          </div>
        ) 
      }
    </div>
  )
}
export default Personal
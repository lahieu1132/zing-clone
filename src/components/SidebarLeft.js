import {useState,useEffect} from 'react'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {BsPersonBadge,BsRecordCircle, BsFillPencilFill,BsChevronRight} from 'react-icons/bs'
import {FaChartPie} from 'react-icons/fa'
import {RiNeteaseCloudMusicLine, RiFolderMusicLine} from 'react-icons/ri'
import {MdOutlineFeed} from 'react-icons/md'
import {FiMusic} from 'react-icons/fi'
import {BiCategoryAlt, BiStar} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'

function SidebarLeft() {

  const {currentUser, signInWithGoogle} = useAuth()

  return (
    <div className="w-[70px] lg:w-[240px]  flex flex-col bg-[#231b2e] transition-all z-50" >
        <Link to='/' className='sidebar-brand fixed '>
            <button>
            </button>
        </Link>
        <div className='mb-[18px] mt-[70px]'>
          <ul className='sidebar'>
            <li className='w-full' title='Cá nhân'>
              <NavLink activeclassname='active' className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' 
              to='/ca-nhan' >
                <BsPersonBadge className='text-2xl' />
                <span className='hidden lg:block ml-2'>Cá nhân</span>
              </NavLink>
            </li>
            <li className='w-full' title='Khám phá'>
              <NavLink activeclassname='active' className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' 
              to='/' >
                <BsRecordCircle className='text-2xl' />
                <span className='hidden lg:block ml-2'>Khám phá</span>
              </NavLink>
            </li>
            <li className='w-full' title='#zingchart'>
              <NavLink activeclassname='active' className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' to='/zingchart' >
                <FaChartPie className='text-2xl' /> 
                <span className='hidden lg:block ml-2'>#zingchart</span>
              </NavLink>
            </li>
            <li className='w-full' title='Radio'>
              <NavLink activeclassname='active' className='h-[54px] relative lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' to='/radio' >
                <RiNeteaseCloudMusicLine className='text-2xl' />
                <span className='hidden lg:block ml-2'>Radio</span>
                <div className='hidden lg:block absolute top-1 left-24 bg-[red] px-1 py-[0.5px] text-xs rounded-md'>
                  live
                </div>
              </NavLink>
            </li>
            <li className='w-full' title='Theo dõi'>
              <NavLink activeclassname='active' className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' to='/theodoi' >
                <MdOutlineFeed className='text-2xl' />
                <span className='hidden lg:block ml-2'>Theo dõi</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='h-[.5px] bg-slate-500 w-8 lg:w-[80%] mx-auto'></div>
        <div className='sidebar-scroll sidebar overflow-y-scroll mb-36 mt-5 w-full h-full relative '>
            <ul className=''> 
              <li className='w-full' title='Nhạc mới'>
                <NavLink activeclassname='active' className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' to='/nhacmoi' >
                  <FiMusic className='text-2xl' />
                  <span className='hidden lg:block ml-2'>Nhạc mới</span>
                </NavLink>
              </li>
              <li className='w-full' title='Thể loại'>
                <NavLink activeclassname='active' className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' to='/theloai' >
                  <BiCategoryAlt className='text-2xl' />
                  <span className='hidden lg:block ml-2'>Thể loại</span>
                </NavLink>
              </li>
              <li className='w-full' title='Top 100'>
                <NavLink activeclassname='active' className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' to='/top100' >
                  <BiStar className='text-2xl' />
                  <span className='hidden lg:block ml-2'>Top 100</span>
                </NavLink>
              </li>
              <li className='w-full' title='MV'>
                <NavLink activeclassname='active' className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-sm font-[700]' to='/mv' >
                  <RiFolderMusicLine className='text-2xl' />
                  <span className='hidden lg:block ml-2'>MV</span>
                </NavLink>
              </li>
            </ul>
            { !currentUser &&
              <div className='hidden lg:block bg-[#7e009f] my-[10px] mx-5 py-[15px] px-2 text-center rounded-lg'
              // style={{backgroundImage:'linear-gradient(117deg,#5a4be7,#c86dd7 102%)'}}
            >
              <h2 className='text-[13px] font-bold text-white mb-2'>
              Đăng nhập để khám phá playlist dành riêng cho bạn
              </h2>
              <button 
                onClick={signInWithGoogle}
              className='bg-[#7e009f] border-2 text-white py-[6px] px-[35px] text-xs font-semibold rounded-2xl uppercase'>
                Đăng nhập
              </button>
              </div>
            }
            <div className='hidden lg:block my-[10px] mx-5 py-[15px] px-2 text-center rounded-lg'
              style={{backgroundImage:'linear-gradient(117deg,#5a4be7,#c86dd7 102%)'}}
            >
              <h2 className='text-[13px] font-bold text-white mb-2'>
                Nghe nhạc không quảng cáo cùng kho nhạc VIP
              </h2>
              <button className='bg-[#ffdb00] hover:bg-[#e5c500] py-[6px] px-[35px] text-xs font-semibold rounded-2xl uppercase'>
                Nâng cấp vip
              </button>
            </div>
            {
              currentUser && 
              <div className='pt-4 sidebar-pen '>
              <div className='hidden lg:flex mx-6 justify-between items-center h-6 mb-3'>
                <p className='uppercase text-sm font-medium text-white'>Thư viện</p>
                <i className='hidden cursor-pointer p-2 text-xs hover:bg-slate-400 rounded-full' title='Chỉnh sửa'>
                  <BsFillPencilFill />  
                </i>
              </div>
              <ul className=''> 
              <li className='w-full' title='Nhạc mới'>
                <Link  className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-[13px] font-[600]' to='/nhacmoi' >
                  <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg" alt="" />
                  <span className='hidden lg:block ml-2'>Nhạc mới</span>
                </Link>
              </li>
              <li className='w-full' title='Thể loại'>
                <Link  className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-[13px] font-[600]' to='/theloai' >
                  <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg" alt="" />
                  <span className='hidden lg:block ml-2'>Thể loại</span>
                </Link>
              </li>
              <li className='w-full' title='Top 100'>
                <Link  className='h-[54px] lg:h-[38px] flex flex-row items-center py-[9px] pl-6 border-l-[3px] border-transparent text-[#dadada] hover:text-white text-[13px] font-[600]' to='/top100' >
                  <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg" alt="" />
                  <span className='hidden lg:block ml-2'>Top 100</span>
                </Link>
              </li>
            </ul>
            </div>
            }
        </div>
        <div className='hidden lg:flex items-center text-white border-t  border-[#ccc] fixed bottom-[90px] py-2 px-6 w-[70px] lg:w-[240px] h-14'>
          <AiOutlinePlus /> 
          <span className='text-sm font-semibold'>Tạo playlist mới</span>
        </div>
        <div className='lg:hidden flex items-center justify-center fixed bottom-[90px] py-2 px-6 w-[70px] lg:w-[240px] h-14'>
            <div className='text-white border-[#ccc] border p-2 rounded-full'>
              <BsChevronRight /> 
            </div>
        </div>
    </div>
  )
}
export default SidebarLeft
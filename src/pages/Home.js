import React from "react"
import Sliders from "../components/Sliders"
import PlaylistRowSmall from '../components/PlaylistRowSmall'
import PlaylistRowBig from '../components/PlaylistRowBig'
import Multiline from '../components/Mutiline'
import {useData} from '../context/DataContext'
import {useAuth} from '../context/AuthContext'
import Footer from '../components/Footer'

function Home() {

  const {myPlaylist,playlistToday,xoneList} = useData()
  const {currentUser} = useAuth()

  return (
    <div className=" h-full w-full mt-[70px] overflow-y-scroll ">
        <div className=" w-full items-center px-2 sm:px-14 pb-28">
          <Sliders />
          {currentUser && <PlaylistRowSmall playlistItems={myPlaylist} title='Gần Đây'/>}
          <PlaylistRowBig playlistItems={playlistToday} title='lựa chọn hôm nay' />
          <PlaylistRowBig playlistItems={xoneList} title="XONE's CORNER" />
          <PlaylistRowSmall playlistItems={myPlaylist} title='Radio Nổi Bật' radio circle/>
          <PlaylistRowBig playlistItems={xoneList} title="Mix Riêng cho bạn" number={2} />
          <PlaylistRowBig playlistItems={playlistToday} title="Nhạc mới mỗi ngày" />
          <div className="w-full  grid grid-cols-3 gap-8 ">
            <div className="muitiline w-full rounded-lg overflow-hidden">
                <img className="rounded-lg object-contain" src="https://zmp3-static.zadn.vn/skins/zmp3-v5.2/images/song-vn-2x.jpg" alt="" />
            </div>
            <div className="muitiline w-full rounded-lg overflow-hidden">
                <img className="rounded-lg object-contain" src="https://zmp3-static.zadn.vn/skins/zmp3-v5.2/images/web_song_usuk.jpg" alt="" />
            </div>
            <div className="muitiline w-full rounded-lg overflow-hidden">
                <img className="rounded-lg object-contain" src="https://zmp3-static.zadn.vn/skins/zmp3-v5.2/images/web_song_kpop.jpg" alt="" />
            </div>
          </div>
          <Footer />
        </div>
    </div>
  )
}
export default Home
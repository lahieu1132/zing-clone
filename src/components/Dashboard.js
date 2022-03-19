import {Routes, Route} from 'react-router-dom'
import Personal from '../pages/Personal'
import Overview from '../components/Overview'
import Home  from '../pages/Home'
import OverviewMusic from '../components/OverviewMusic'
import Playlist from '../components/Playlist'
import Podcast from '../components/Podcast'
import Zingchart from '../pages/Zingchart'
import Artist from '../pages/Artist'
import PageEmpty from '../pages/PageEmpty'

function Dashboard() {
  return (
    <div className="dashboard  bg-[#170f23] xl:mr-[330px] pb-[90px]">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/zingchart'  element={<Zingchart />} />
        <Route path='/nghe-si/:artistName' element={<Artist />} />
        <Route path='ca-nhan'  element={<Personal />} >
          <Route index path='*' element={<Overview />} />
          <Route path='music' element={<OverviewMusic />} />
          <Route path='playlist' element={<Playlist />} />
          <Route path='podcast' element={<Podcast />} />
        </Route>
        <Route path='*' element={<PageEmpty />}/>
      </Routes>  
    </div>
  )
}
export default Dashboard
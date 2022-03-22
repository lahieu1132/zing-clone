import React, { useContext, useState , useEffect, useCallback} from 'react'
import axios from 'axios'

const ControlContext = React.createContext()

export function useControl() {
    return useContext(ControlContext)
}

function ControlProvider({children}) {

  const storageSongs = JSON.parse(localStorage.getItem('songs'))
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] =useState(false)
  const [random, setRandom] = useState(false)
  const [songs, setSongs] = useState([])
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(1);

  useEffect(()=>{
    const options = {
        method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/album/119606',
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '977515bff3msha4c2843ddb77030p139c38jsn052949c039f9'
      }
      };
    axios.request(options).then(function (response) {
      setSongs(storageSongs || response.data.tracks.data); 
    }).catch(function (error) {
      console.error(error);
    });
  },[])

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  

  const handlePlay = () =>{
    setPlaying(!playing)
  }
  const handleLoop = () => {
    setLoop(!loop)
  }
  const handleSetCurrentSongIndex = useCallback((i)=>{
      setCurrentSongIndex(i)
  },[currentSongIndex])

  const handleSetSongs = (songs)=>{
    localStorage.setItem('songs',JSON.stringify(songs))
    setSongs(songs)
  }
  const toggleRandom = () => {
    setRandom(!random)
  }
  const SkipSong = (forwards = true) => {
    if(random) {
      setCurrentSongIndex(Math.floor(Math.random() * songs?.length))
    }
    else if (forwards) {
         
          setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp++;

            if (temp > songs.length - 1) {
                temp = 0;
            }

            return temp;
          })
        
    } else {
        setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp--;

            if (temp < 0) {
                temp = songs.length - 1;
            }

            return temp;
        });
    }
  }
  

    const value ={
        SkipSong,
        playing,handlePlay,
        currentSongIndex,
        handleSetCurrentSongIndex,
        songs,
        loop,handleLoop,handleSetSongs,random,toggleRandom
    }
  return (
    <ControlContext.Provider value= {value}>
    { children}
</ControlContext.Provider>
  )
}

export default ControlProvider;

import React, { useContext, useState , useEffect} from 'react'
import { db } from '../firebase'
import { collection,getDocs,getDoc,setDoc,doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { useAuth } from './AuthContext'
import axios from 'axios'

const DataContext = React.createContext()

export function useData() {
    return useContext(DataContext)
}

function DataProvider({children}) {
    const [userId, setUserId] = useState(10)
    const userRef = collection(db, 'User')
    const [list, setList] =useState([])
    const {currentUser} = useAuth()
    const [active, setActive] = useState(false)
    const [myPlaylist, setMyPlaylist] = useState([])
    const [playlist, setPlaylist] = useState([])
    const [playlistToday, setPlaylistToday] = useState([])
    const [listToday, setListToday] = useState([])
    const [xonePlaylist,setXonePlaylist] = useState([])
    const [xoneList, setXoneList] = useState([])


    useEffect(()=>{
      if(userId != 10 && currentUser){
        if(userId.every(id => id !== currentUser?.uid)){
           setDoc(doc(db, "User", currentUser?.uid), {
            myList: [],
            songId :[],
          })
        }
      }
    },[currentUser,userId])
    
    useEffect(()=>{
      if(currentUser){
        async function getFilms(){
            const querySnapshot = await getDocs(userRef);
            querySnapshot.forEach((doc) => {
              if(doc.id == currentUser.uid)
              setList(doc.data())
            })
          }
        getFilms()
      }
    },[active,currentUser])

    useEffect(()=>{
      const getUserIds = async () => {
        const data = await getDocs(userRef)
        setUserId(data.docs.map((doc) => doc.id))
      }
      getUserIds()
        async function getFilms(){
            const querySnapshot = await getDocs(collection(db, 'playlist'));
            querySnapshot.forEach((doc) => {
              setPlaylist(doc.data())
            })
          }
        getFilms()
        async function getFilms1(){
          const querySnapshot = await getDocs(collection(db, 'playlistToday'));
          querySnapshot.forEach((doc) => {
            setListToday(doc.data())
          })
        }
        getFilms1()
        async function getFilms2(){
          const querySnapshot = await getDocs(collection(db, 'xonePlaylist'));
          querySnapshot.forEach((doc) => {
            setXonePlaylist(doc.data())
          })
        }
        getFilms2()
    },[])
    useEffect(()=>{
      xonePlaylist?.playlistId?.map(pli => {
      const options = {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/playlist/${pli}`,
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '977515bff3msha4c2843ddb77030p139c38jsn052949c039f9'
        }
      };
      
      axios.request(options).then(function (response) {
        setXoneList(pre => [...pre,response.data])
      }).catch(function (error) {
        console.error(error);
      });
    })
  },[xonePlaylist])

    useEffect(()=>{
        playlist?.plalistId?.map(pli => {
        const options = {
          method: 'GET',
          url: `https://deezerdevs-deezer.p.rapidapi.com/playlist/${pli}`,
          headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '977515bff3msha4c2843ddb77030p139c38jsn052949c039f9'
          }
        };
        
        axios.request(options).then(function (response) {
          setMyPlaylist(pre => [...pre,response.data])
        }).catch(function (error) {
          console.error(error);
        });
      })
    },[playlist])

    useEffect(()=>{
      listToday?.playlistId?.map(pli => {
      const options = {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/playlist/${pli}`,
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '977515bff3msha4c2843ddb77030p139c38jsn052949c039f9'
        }
      };
      
      axios.request(options).then(function (response) {
        setPlaylistToday(pre => [...pre,response.data])
      }).catch(function (error) {
        console.error(error);
      });
    })
    },[listToday])
    
    const handleAddList = async (song) =>{
      const washingtonRef = doc(db, "User", currentUser?.uid);
      await updateDoc(washingtonRef, {
        myList: arrayUnion(song),
        songId: arrayUnion(song?.id)
      });
      setActive(!active)

    }
    const handleRemoveList = async (song) =>{
      const washingtonRef = doc(db, "User", currentUser?.uid);
      await updateDoc(washingtonRef, {
        myList: arrayRemove(song),
        songId: arrayRemove(song?.id)
      });
      setActive(!active)

    }
    

    const value ={
        list,
        handleAddList,
        handleRemoveList,
        myPlaylist,
        playlistToday,
        xoneList
    }
  return (
    <DataContext.Provider value= {value}>
        {children}
</DataContext.Provider>
  )
}
export default DataProvider
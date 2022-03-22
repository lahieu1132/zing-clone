import React, { useEffect, useState } from "react"
import { useControl } from "../context/ControlContext"
import SongDetail from '../components/SongDetail'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {useAuth} from '../context/AuthContext'
import {FaPlay} from 'react-icons/fa'

function SidebarRight() {
  const [show, setShow] = useState(false)
  const [empty, setEmpty] = useState(false)
  const {songs,currentSongIndex,handleSetSongs,handleSetCurrentSongIndex,playing} = useControl()
  const {currentUser} = useAuth()

  useEffect(()=>{
    currentUser ? setEmpty(true) : setEmpty(false)
  },[currentUser])

  useEffect(()=>{
    playing && setEmpty(true)
   },[playing])

    useEffect(()=>{
      const timer = ()=>{
        document.querySelector('.song-active').scrollIntoView({
          behavior:'smooth',
          block:'start'
        })
      }

      setTimeout(timer,500)
      
      return ()=>{
        window.clearTimeout(timer)
      }
     
    },[currentSongIndex])

    const [characters, updateCharacters] = useState(songs);

    useEffect(()=>{
      updateCharacters(songs)
    },[songs])
    
    function handleOnDragEnd(result) {
      if (!result.destination) return;
      
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      
      updateCharacters(items);
      handleSetSongs(items)
      if(reorderedItem?.id == songs[currentSongIndex]?.id){
        handleSetCurrentSongIndex(result.destination.index)
      }
    }
  return (
    <div className=" xl:flex hidden flex-col fixed right-0 top-0 bottom-0 w-[330px] bg-[#170f23] h-full overflow-hidden border-l border-[#ffffff1a] pl-2">
      <div className="text-white py-3">
        <div className="flex flex-row my-2 ml-2 p-1 bg-[#2f2739] rounded-3xl w-[225px]">
          <div className={`px-3 text-xs font-semibold ${!show && 'bg-[#6d6875]'} rounded-3xl mr-1 cursor-pointer`}
            onClick={()=>setShow(false)}
          >
            <h2>Danh sách phát</h2>
          </div>
          <div className={`px-3 text-xs font-semibold ${show && 'bg-[#6d6875]'} rounded-3xl mr-1 cursor-pointer`}
            onClick={()=>setShow(true)}
            >
            <h2>Nghe gần đây</h2>
          </div>
        </div>
      </div>
      { !empty ?
        <div className="flex-grow relative ">
          <div className="w-[285px] h-[240px] ml-3"
            style={{
              background:'url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/bg-empty-dark.svg)  50%/cover no-repeat',
            }}
          ></div>
        </div> :

      <div className="flex-grow overflow-y-scroll pb-24">
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                  {characters?.map((song, index) => {
                    return (
                      <Draggable key={song.id} draggableId={song.id.toString()} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <SongDetail song={song} i={index}/>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
      </div>}
    </div>
  )
}
export default SidebarRight
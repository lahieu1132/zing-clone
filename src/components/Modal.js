import React,{useEffect, useRef} from "react";

function Modal({children, setModalDisplay}) {
  useEffect(()=>{
    const handle = (e) => {
      if(e.target == document.querySelector('.modal')) {
        setModalDisplay(false)
      }
    }
    window.addEventListener('click', handle)
    return ()=>window.removeEventListener('click', handle)
  })
  return (
      <div  className="modal flex justify-center w-screen items-center fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#000000cc]">
              {children}
      </div>
  )
}
export default Modal;

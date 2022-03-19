import React from "react";

function PageEmpty() {
  return (
    <div className='w-full h-full flex flex-col gap-4 items-center justify-center pb-56'>
        <div className='w-28 h-28' 
            style={{backgroundImage:'url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/record-dark.svg)',
                backgroundSize:'cover'
        }}
        ></div>
        <h2 className='text-[#ffffff80] font-medium text-base'>Updating...</h2>
    </div>
  ) 
      
}
export default PageEmpty;

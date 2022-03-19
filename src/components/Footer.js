import React from "react";

const items = [
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/Kakao-M.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/beggers.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/universal-1.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/empire.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/FUGA.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/sony.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/orcahrd.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/monstercat.png',
    'https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/yg.png'
    ]
function Footer() {
    
  return (  
      <div className="mt-10">
        <h2 className="text-center text-[#ffffff80] hover:text-[#7200a1] uppercase font-medium cursor-pointer">Đối tác âm nhạc</h2>
        <div className="grid grid-cols-4 xl:grid-cols-8 gap-4 mt-6">
            {items.map((item,idx) => (
                <div className={`h-16 w-full p-2 bg-white rounded-lg ${(idx+1) % 4 == 1  && idx >= 8 && 'col-start-2 xl:col-start-4'}`} key={idx}>
                    <img className="h-full w-full object-contain " src={item} alt="" />
                </div>
            ))}
        </div>
      </div>
  )
}
export default Footer;

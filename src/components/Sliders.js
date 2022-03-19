import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation ,Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Sliders() {

    let [view, setView] = useState(3)

    useEffect(()=>{
        const handle = ()=>{
            if(window.innerWidth <= 1024) {
                setView(2)
            }
            else setView(3)
        }

        window.addEventListener('resize', handle )

        return ()=>{
            window.removeEventListener('resize', handle)
        }

    },[window.innerWidth])

      return (
          <>
            <Swiper
        slidesPerView={view}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide className="w-1/3 h-[162px] cursor-pointer rounded-lg">
                <img
                src="https://photo-zmp3.zadn.vn/banner/7/f/3/b/7f3b453fa0bc68c576022649ca40f06c.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-1/3 h-[162px] cursor-pointer rounded-lg">
                <img
                  
                src="https://photo-zmp3.zadn.vn/banner/5/7/1/d/571d34914e4d76390baabd5ff6b39f32.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-1/3 h-[162px] cursor-pointer rounded-lg">
                <img
                  
                src="https://photo-zmp3.zadn.vn/banner/b/9/d/d/b9dd1db6ef975a16d3f65b39fec63b9a.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-1/3 h-[162px] cursor-pointer rounded-lg">
                <img
                  
                src="https://photo-zmp3.zadn.vn/banner/c/3/a/a/c3aa64fca8084bcfd196653b78800def.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-1/3 h-[162px] cursor-pointer rounded-lg">
                <img
                src="https://photo-zmp3.zadn.vn/banner/8/a/e/d/8aedc231e3ee9875bf18c3cd7ca1fe87.jpg" alt="" />
            </SwiperSlide>
        
        </Swiper>  
        </>
      );

  
  
}
export default Sliders;

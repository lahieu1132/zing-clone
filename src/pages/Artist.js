import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineUserAdd} from 'react-icons/ai'
function Artist() {

    let {artistName} = useParams()
    const [artist, setArtist] = useState([])
    
    useEffect(()=>{
        const artistId = artistName.split('-')[1]
        const options = {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistId}`,
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '977515bff3msha4c2843ddb77030p139c38jsn052949c039f9'
        }
        };

        axios.request(options).then(function (response) {
            setArtist(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    },[artistName])

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: artist?.tracklist,
            headers: {
                'x-rapidapi-host': 'api.deezer.com',
                'x-rapidapi-key': '977515bff3msha4c2843ddb77030p139c38jsn052949c039f9'
            }
            };
    
            axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    },[artist])
  return (
    <div className="h-full overflow-y-scroll ">
        <div className="h-[410px] w-full  relative z-20">
            <div className="flex flex-row justify-between pb-10 px-14 z-20 absolute  pt-[110px] w-full h-full top-0 left-0">
                <div className="text-white">
                    <h1 className="text-[40px] tracking-wide font-[700]">{artist?.name}</h1>
                    <div className="flex flex-row gap-3 mt-4">
                        <button className="flex flex-row gap-1 items-center bg-[#7200a1] hover:bg-[#72008f] py-[6px] px-6 rounded-3xl uppercase">
                            <FaPlay />
                            <span>Phát nhạc</span>
                        </button>
                        <button className="flex flex-row gap-1 items-center bg-[#7200a1] hover:bg-[#72008f] py-[6px] px-6 rounded-3xl uppercase">
                            <AiOutlineUserAdd />
                            <span>Quan tâm</span>
                        </button>
                    </div>
                </div>
                <div>
                    <img className="rounded-full" src={artist?.picture_medium} alt="" />
                </div>
            </div>
            <div className="absolute  right-0 bottom-0 top-0 left-0 z-10 overflow-hidden">
                <div className="absolute right-0 bottom-0 top-0 left-0 z-10 "
                    style={{
                        backgroundImage: `url(${artist?.picture_medium})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50%',
                        backgroundSize:'cover',
                        filter:'blur(50px)'
                    }}
                ></div>
                <div className="absolute right-0 bottom-0 top-0 left-0 bg-[#291547cc]"></div>
            </div>
        </div>
    </div>
  )
}
export default Artist;

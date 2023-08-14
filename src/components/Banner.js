import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrginals);
            setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <header
    className='text-white object-contain h-[448px]'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
    }}
    >
       <div className='pt-[140px] h-[190px]'>
        <h1 className='text-[3rem] font-bold pb-[0.3rem] ml-[30px]'>
        {movie?.title || movie?.name || movie?.orginal_name} 
        </h1>
        <div className='ml-[30px]'>
            <button className='cursor-pointer text-white outline-none border-none font-bold rounded-sm pl-8 pr-8 mr-4 pt-2 pb-2 bg-gray-800 bg-opacity-40 hover:text-black hover:bg-slate-200 hover:transition-all hover:duration-200'>Play</button>
            <button className='cursor-pointer text-white outline-none border-none font-bold rounded-sm pl-8 pr-8 mr-4 pt-2 pb-2 bg-gray-800 bg-opacity-40 hover:text-black hover:bg-slate-200 hover:transition-all hover:duration-200'>My List</button>
        </div>

        <h1 className='w-[45rem] leading-5 pt-4 text-sm max-w-sm h-[80px] ml-[30px]'>
          {truncate(movie?.overview, 150)}
        </h1>

        <div className='h-[7.4rem] bg-gradient-to-t from-neutral-950 to-transparent bg-opacity-60'>
       </div>

       </div> 

    </header>
  )
}

export default Banner

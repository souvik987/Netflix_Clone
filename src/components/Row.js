import React, { useEffect, useState } from 'react';
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    }, [fetchUrl]);

    console.log(movies);

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {

        autoplay: 1,
      },
    };

    const handleClick = (movie) =>{
      if(trailerUrl) {
        setTrailerUrl('');
      } else {
        movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
         setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.error(error))
      }
    }

  return (
    <div className='ml-[20px] text-white'>
      <h2 className='text-lg font-bold'>{title}</h2>

      <div className='flex overflow-y-hidden overflow-x-scroll p-[20px]'>
        {/* row_posters */}

        {movies.map(movie => (
          <img 
          key={movie.id}
          onClick={() => handleClick(movie)}
          className={`w-full object-contain max-h-[100px] transition-transform duration-450 mr-[10px] hover:scale-105 ${isLargeRow && "max-h-[250px] hover:transform"}`}
          src= {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt="{movie.name}" />
        ))}

      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row

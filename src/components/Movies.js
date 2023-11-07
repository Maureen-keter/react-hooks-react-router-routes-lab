import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index)=>(
      <div key={index}>
        <h4>Title:{movie.title}</h4>
        <div>Time:{movie.time}</div>
        <ul>
        {movie.genres.map((genre,index)=>(
          <li key={index}>{genre}</li>
        ))}
        </ul>
      </div>
    ))}
  </div>
}

export default Movies
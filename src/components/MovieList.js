import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("rendering");
  return (
    <div className="p-6">
      <p className="text-white pb-4 text-3xl font-bold">{title}</p>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((item) => (
            <MovieCard key={item.id} posterPath={item.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

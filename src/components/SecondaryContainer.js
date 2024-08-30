import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        {nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        )}
        {popularMovies && (
          <MovieList title={"Popular Movies"} movies={popularMovies} />
        )}
        {topRatedMovies && (
          <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        )}
        {upcomingMovies && (
          <MovieList title={"UpComing Movies"} movies={upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;

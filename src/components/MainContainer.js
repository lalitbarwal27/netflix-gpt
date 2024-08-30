import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movieList = useSelector((store) => store.movie?.nowPlayingMovies);
  console.log(movieList, "this is list");
  if (!movieList) {
    return;
  }

  return (
    <>
      <VideoTitle
        title={movieList[0]?.title}
        overview={movieList[0]?.overview}
      />
      <VideoBackground id={movieList[0]?.id} />
    </>
  );
};

export default MainContainer;

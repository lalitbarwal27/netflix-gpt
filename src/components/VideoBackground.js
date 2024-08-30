import React from "react";
import useFetchMovieTrailer from "../hooks/fetchMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = (props) => {
  const { id } = props;
  const trailer = useSelector((store) => store.movie?.trailer);
  useFetchMovieTrailer(id);

  if (!trailer) {
    return;
  }
  return (
    <div className="w-screen mx-auto">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer[0]?.key}?autoplay=1&mute=1&amp;controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        fr
      ></iframe>
    </div>
  );
};

export default VideoBackground;

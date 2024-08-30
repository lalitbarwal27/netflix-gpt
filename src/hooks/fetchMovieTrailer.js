import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/movieSlice";

const useFetchMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const fetchMovieTrailerVideo = async () => {
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );

    const res = await videos.json();
    const trailer = res?.results.filter((item) => item.type === "Trailer");
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    fetchMovieTrailerVideo();
  }, []);
};

export default useFetchMovieTrailer;

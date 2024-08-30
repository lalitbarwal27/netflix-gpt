import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieList } from "../utils/movieSlice";

const useFetchMovieList = () => {
  const dispatch = useDispatch();
  const fetchMoviesList = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const res = await movies.json();
    console.log(res);
    dispatch(addMovieList(res.results));
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);
};

export default useFetchMovieList;

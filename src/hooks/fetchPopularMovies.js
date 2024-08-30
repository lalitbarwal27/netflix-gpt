import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularList } from "../utils/movieSlice";

const useFetchPopularMovieList = () => {
  const dispatch = useDispatch();
  const fetchMoviesList = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const res = await movies.json();
    dispatch(addPopularList(res.results));
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);
};

export default useFetchPopularMovieList;

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieList, addUpcomingList } from "../utils/movieSlice";

const useFetchUpcomingMovieList = () => {
  const dispatch = useDispatch();
  const fetchMoviesList = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const res = await movies.json();
    dispatch(addUpcomingList(res.results));
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);
};

export default useFetchUpcomingMovieList;

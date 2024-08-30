import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularList, addTopRatedList } from "../utils/movieSlice";

const useFetchTopRatedMovieList = () => {
  const dispatch = useDispatch();
  const fetchMoviesList = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const res = await movies.json();
    dispatch(addTopRatedList(res.results));
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);
};

export default useFetchTopRatedMovieList;

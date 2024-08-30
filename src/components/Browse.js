import { useSelector } from "react-redux";
import useFetchMovieList from "../hooks/fetchMovieList";
import Header from "./Header";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovieList from "../hooks/fetchPopularMovies";
import useFetchTopRatedMovieList from "../hooks/fetchTopRatedMovies";
import useFetchUpcomingMovieList from "../hooks/fetchUpcomingList";

const Browse = () => {
  useFetchMovieList();
  useFetchPopularMovieList();
  useFetchTopRatedMovieList();
  useFetchUpcomingMovieList();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

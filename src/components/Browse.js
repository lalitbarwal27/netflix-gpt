import { useSelector } from "react-redux";
import useFetchMovieList from "../hooks/fetchMovieList";
import Header from "./Header";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchMovieList();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

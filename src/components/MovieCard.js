import React from "react";
import { CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mr-4">
      <img alt="poster" src={CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

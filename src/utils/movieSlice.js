import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
  },
  name: "movie",
  reducers: {
    addMovieList: (state, action) => {
      state.nowPlayingMovies = action.payload;
      return;
    },
    addMovieTrailer: (state, action) => {
      state.trailer = action.payload;
      return;
    },
  },
});

export const { addMovieTrailer, addMovieList } = movieSlice.actions;

export default movieSlice.reducer;

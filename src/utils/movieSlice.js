import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailer: null,
  },
  name: "movie",
  reducers: {
    addMovieList: (state, action) => {
      state.nowPlayingMovies = action.payload;
      return;
    },
    addTopRatedList: (state, action) => {
      state.topRatedMovies = action.payload;
      return;
    },
    addUpcomingList: (state, action) => {
      state.upcomingMovies = action.payload;
      return;
    },

    addPopularList: (state, action) => {
      state.popularMovies = action.payload;
      return;
    },
    addMovieTrailer: (state, action) => {
      state.trailer = action.payload;
      return;
    },
  },
});

export const {
  addMovieTrailer,
  addMovieList,
  addPopularList,
  addTopRatedList,
  addUpcomingList,
} = movieSlice.actions;

export default movieSlice.reducer;

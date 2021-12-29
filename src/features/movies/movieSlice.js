import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (input) => {
    const data = await movieApi.get(`?apikey=${ApiKey}&s=${input}&type=movie`);
    const response = await data.data;
    return response;
  }
);
export const fetchShows = createAsyncThunk(
  "movies/fetchShows",
  async (input) => {
    const data = await movieApi.get(`?apikey=${ApiKey}&s=${input}&type=series`);
    const response = await data.data;
    return response;
  }
);

export const fetchMovieorShowDetail = createAsyncThunk(
  "movies/fetchMovieorShowDetail",
  async (id) => {
    const data = await movieApi.get(`?apikey=${ApiKey}&i=${id}&Plot=full`);
    const response = await data.data;
    return response;
  }
);

const initialState = {
  movies: {},
  shows: {},
  movieOrShowDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // allMovies: (state, action) => {
    //   state.movies = action.payload;
    // },
    removeSelectedMovieOrShow: (state) => {
      state.movieOrShowDetail = {};
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      // console.log("Pending");
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      // console.log("Successfully fetched");
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchShows.fulfilled]: (state, { payload }) => {
      console.log("Successfully fetched");
      return { ...state, shows: payload };
    },
    [fetchMovieorShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Successfully fetched");
      return { ...state, movieOrShowDetail: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.movieOrShowDetail;
export default movieSlice.reducer;

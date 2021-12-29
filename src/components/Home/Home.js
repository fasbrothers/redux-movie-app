import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchMovies, fetchShows } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Lord";
  useEffect(() => {
    dispatch(fetchMovies(movieText));
    dispatch(fetchShows(showText));
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
}

export default Home;

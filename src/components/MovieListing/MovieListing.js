import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { settings } from "../../common/settings";

function MovieListing() {
  const getMovies = useSelector(getAllMovies);
  const getShows = useSelector(getAllShows);

  let renderMovie,
    renderShows = "";

  renderMovie =
    getMovies.Response === "True" ? (
      getMovies.Search.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))
    ) : (
      <h3>{getMovies.Error}</h3>
    );
  renderShows =
    getShows.Response === "True" ? (
      getShows.Search.map((show) => (
        <MovieCard key={show.imdbID} movie={show} />
      ))
    ) : (
      <h3>{getShows.Error}</h3>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovie}</Slider>{" "}
        </div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="show-container">
          <Slider {...settings}>{renderShows}</Slider>{" "}
        </div>
      </div>
    </div>
  );
}

export default MovieListing;

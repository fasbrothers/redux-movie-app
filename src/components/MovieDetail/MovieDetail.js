import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieorShowDetail,
  getMovieOrShowDetail,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieOrShowDetail = useSelector(getMovieOrShowDetail);
  useEffect(() => {
    dispatch(fetchMovieorShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div>
      {Object.keys(movieOrShowDetail).length === 0 ? (
        <div>... Loading</div>
      ) : (
        <div className="movie">
          <div className="text">
            <h1>{movieOrShowDetail.Title}</h1>
            <div className="sub">
              <div className="sub__rating">
                <h4>
                  IMDB Rating
                  <StarIcon sx={{ fontSize: 15 }} />:{" "}
                  {movieOrShowDetail.imdbRating}
                </h4>
              </div>
              <div className="sub__votes">
                <h4>
                  IMDB Votes
                  <span>
                    <ThumbUpIcon sx={{ fontSize: 15 }} />
                  </span>{" "}
                  : {movieOrShowDetail.imdbVotes}
                </h4>
              </div>
              <div className="sub__runtime">
                <h4>
                  RunTime
                  <LocalMoviesIcon sx={{ fontSize: 15 }} />:{" "}
                  {movieOrShowDetail.Runtime}
                </h4>
              </div>
              <div className="sub__year">
                <h4>
                  Year
                  <CalendarTodayIcon sx={{ fontSize: 15 }} />:{" "}
                  {movieOrShowDetail.Year}
                </h4>
              </div>
            </div>
            <h4 className="plot">{movieOrShowDetail.Plot}</h4>
            <div className="info">
              <p>
                Director: <span>{movieOrShowDetail.Director}</span>
              </p>
              <p>
                Generes: <span>{movieOrShowDetail.Genre}</span>
              </p>
              <p>
                Awards: <span>{movieOrShowDetail.Awards}</span>
              </p>
              <p>
                Languages: <span>{movieOrShowDetail.Language}</span>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={movieOrShowDetail.Poster} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies, fetchShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return alert("Enter an input");
    }
    dispatch(fetchMovies(input));
    dispatch(fetchShows(input));
    setInput("");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search by Movie and Shows"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="logo" />
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import "../CSS/style.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const route = useNavigate();

  const [data, setData] = useState({ movie: "" });

  const getData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setData({ movie: "" });
    route(`/search/${data.movie}`);
  };

  console.log(data);

  return (
    <>
      <nav className="display">
        <div className="display">
          <div className="nav-l">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
              className="adj-img"
            />
          </div>
          <div className="nav-r display">
            <div onClick={() => route("/")} className="cursor">
              Popular
            </div>
            <div onClick={() => route("/top")} className="cursor">
              Top Rated
            </div>
            <div onClick={() => route("/upcome")} className="cursor">
              Upcoming
            </div>
            <div className="searchBar display">
              <input
                type="text"
                placeholder="Movie Name"
                name="movie"
                onChange={(e) => {
                  getData(e);
                }}
                value={data.movie}
              />
              <button
                onClick={(e) => {
                  submit(e);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

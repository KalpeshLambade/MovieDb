import React, { useEffect, useState } from "react";
import "./CSS/style.css";
import { useNavigate } from "react-router-dom";

const Api_key = "c45a857c193f6302f2b5061c3b85e743";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`;

const HomePage = () => {
  const route = useNavigate();
  const [Data, setData] = useState();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((store) => setData(store.results));
  }, []);

  console.log(Data);
  return (
    <>
      <div id="home">
        <div>
          {Data &&
            Data.map((e, i) => (
              <div onClick={()=> route(`/single/${e.id}`)} key={i}>
                <div className="movie_img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt="movie"
                    className="adj-img"
                  />
                </div>
                <div className="movie_name display">
                  <p>{e.title}</p>
                  <p>Rating: {e.vote_average}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

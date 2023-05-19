import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Api_key = `c45a857c193f6302f2b5061c3b85e743`;

const Search = () => {
  const route = useNavigate();
  const [search, setSearch] = useState();

  const movie = useParams();
  const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie.name}&page=1`;

  useEffect(() => {
    fetch(search_url)
      .then((res) => res.json())
      .then((data) => setSearch(data.results));
  }, [search_url]);

  console.log(search);

  return (
    <>
      <div id="home">
        <div>
          {search &&
            search.map((e, i) => (
              <div onClick={() => route(`/single/${e.id}`)} key={i}>
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

export default Search;

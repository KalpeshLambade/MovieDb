import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Api_key = `c45a857c193f6302f2b5061c3b85e743`;

const SinglePage = () => {
  const [data, setData] = useState();
  const [actors, setActors] = useState();

  const movie = useParams();
  const movie_details = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${Api_key}&language=en-US`;
  const cast_details = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${Api_key}&language=en-US`;

  useEffect(() => {
    fetch(movie_details)
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch(cast_details)
      .then((res) => res.json())
      .then((data) => setActors(data.cast));
  }, [movie_details, cast_details]);

  //   console.log(data);
  // console.log(actors);
  return (
    <>
      <div id="overview">
        <div className="overview-l display">
          <div className="overview-top">
            <div>
              {data && data.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt="movie_logo"
                  className="adj-img"
                />
              )}
            </div>
            <div className="display">
              {/* {data &&
                data.original_title &&
                data.vote_average &&
                data.release_date &&
                data.runtime} */}
              {data && data.title && <div>{data.title}</div>}
              {data && data.vote_average && (
                <div>Rating : {data.vote_average}</div>
              )}
              {data && data.release_date && (
                <div>Released Date : {data.release_date}</div>
              )}
              {data && data.runtime && <div>Min :{data.runtime}</div>}
            </div>
          </div>
          <div className="overview-bot">
            <h3>Overview</h3>
            {data && data.overview && <p>{data.overview}</p>}
          </div>
        </div>
        <div className="overview-r">
          {data && data.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              alt="movie_logo"
              className="adj-img"
            />
          )}
        </div>
      </div>
      <div id="cast">
        {actors &&
          actors.map((e, i) => (
            <div key={i} className="display">
              <div className="cast_img">
                <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="cast" className="adj-img" />
              </div>
              <div className="cast_name display">
                <p>Name :{e.original_name}</p>
                <p>Character: {e.character}</p>
              </div>
            </div>
          ))}
        {/* <div>
          <div>
            <img src="" alt="cast" className="adj-img" />
          </div>
          <div>
            <p></p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SinglePage;

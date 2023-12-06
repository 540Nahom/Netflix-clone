import React, { useEffect, useState } from "react";
import YouTube from "react-youtube"; // Corrected import
import movieTrailer from "movie-trailer"; // Corrected import

// Resource
import axios from "../../Resources/axios/axios";
const base_Url = "http://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false); // State to control video display

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
      setShowVideo(false); // Hide the video
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.originals_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setShowVideo(true); // Show the video
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }

  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="row_display">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row_image ${isLargeRow && "row_image_large"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      <div className={`video_display ${showVideo ? "show" : ""}`}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Row;


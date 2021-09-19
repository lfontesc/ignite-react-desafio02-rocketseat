import { useEffect, useState } from "react";
import { GenreResponseProps, MovieProps } from "../interfaces";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";
import "../styles/content.scss";

interface ContentProps {
  selectedGenreId: number;
  setSelectedGenre: (genre: GenreResponseProps) => void;
}

export function Content(props: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${props.selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${props.selectedGenreId}`)
      .then((response) => {
        props.setSelectedGenre(response.data);
      });
  }, [props.selectedGenreId]);

  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}

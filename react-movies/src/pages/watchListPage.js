import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromWatchListIcon from "../components/cardIcons/RemoveFromWatchListIcon";



const WatchListPage = () => {
  const { mustWatch : movieIds } = useContext(MoviesContext);
  const movieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movies", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  const isLoading = movieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  // Map movies with genre ids
  const movies = movieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <PageTemplate
      title="WatchList"
      movies={movies}
      action={(movie) => {
        return <RemoveFromWatchListIcon movie={movie} />
       
      }}
    />
  );
};

export default WatchListPage;
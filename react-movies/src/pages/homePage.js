import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { Pagination } from "@mui/material";
import PlaylistAdd from "../components/cardIcons/PlaylistAdd";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, isError } = useQuery(['discover', currentPage], () => getMovies(currentPage))

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }



  const movies = data.results;


  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))


  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {

          return <>
            <AddToFavoritesIcon movie={movie} />
            <PlaylistAdd movie={movie} />
          </>

        }}
      />
      <Pagination
         count={Math.min(Math.ceil(data.total_results / 20), 500)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          marginBottom: 2,
        }}
      />

    </>
  );
};
export default HomePage;
import React,{useState} from "react";
import { getUpComingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAdd from "../components/cardIcons/PlaylistAdd";
import { Pagination } from "@mui/material";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const UpcomingPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, isError } = useQuery(['upcoming',currentPage],() => getUpComingMovies(currentPage));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <>
    <PageTemplate
      title="Upcoming Movies"
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

export default UpcomingPage;

import React,{useState} from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { Pagination } from "@mui/material";



const PopularMoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {  data, error, isLoading, isError }  = useQuery(['popular',currentPage],() => getPopularMovies(currentPage))

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <>
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={() => {
        return <> 
        
            
            </>
      }}
    />
    <Pagination
      count={500} 
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
export default PopularMoviesPage;
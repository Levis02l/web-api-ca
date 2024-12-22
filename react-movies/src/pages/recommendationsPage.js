import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useParams } from "react-router-dom";
import { getRecommendations } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';




const RecommendationsPage = () => {

  const { id } = useParams();
  const { data: movies, error, isLoading, isError } = useQuery(
    ["recommendations", { id: id }],
    getRecommendations
  );
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  // console.log(movies)
  return (
    <PageTemplate
      title="Recommendations"
      movies={movies.results}
      action={()=>{}}
      
    />

  );
};
export default RecommendationsPage
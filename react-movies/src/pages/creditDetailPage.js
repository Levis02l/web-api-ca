import React from "react";
import { getCreditDetails } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PersonSidebar from "../components/personSideBar";
import CastDetails from "../components/creditDetails";
import MovieCreditList from "../components/movieCreditList";
import { useParams } from 'react-router-dom';
import { getCreditMovies } from "../api/tmdb-api";
import { Box } from "@mui/material";

const CreditDetailsPage = () => {
    
    const { id } = useParams();
    const { data: person, error: personError, isLoading: isLoadingPerson, isError: isErrorPerson } = useQuery(
        ["person", { id: id }],
        getCreditDetails
    );

    const { data: movies, error: moviesError, isLoading: isLoadingMovies, isError: isErrorMovies } = useQuery(
        ["movies", { id: id }],
        getCreditMovies
    );

    if (isLoadingPerson || isLoadingMovies) {
        return <Spinner />;
    }

    if (isErrorPerson) {
        return <h1>{personError.message}</h1>;
    }

    if (isErrorMovies) {
        return <h1>{moviesError.message}</h1>;
    }
    console.log(movies)
    return (
        <>
            {person ? (
                <>

                    <PersonSidebar person={person} >
                        <CastDetails person={person} />
                        <Box mt={4} />
                        <MovieCreditList movies={movies.cast.slice(0,7)}/>
                    </PersonSidebar>
                </>

            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );

}
export default CreditDetailsPage
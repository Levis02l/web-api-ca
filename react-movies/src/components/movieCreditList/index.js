import React from 'react';
import Grid from '@mui/material/Grid2';
import MovieCredit from '../movieCredit';
import Typography from '@mui/material/Typography';

const MovieCreditList = ({ movies }) => {
  return (
    <>
    <Typography variant="h4" component="div" gutterBottom>
      Known For
    </Typography>
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid xs={6} sm={4} md={3} lg={2} key={movie.id}>
          <MovieCredit movie={movie} />
        </Grid>
      ))}
    </Grid>
  </>
  );
};

export default MovieCreditList;

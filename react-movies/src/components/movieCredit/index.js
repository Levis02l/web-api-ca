import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCredit = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
    <Card sx={{ maxWidth: 200, margin: "10px" }}>
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary">
          {movie.title}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

export default MovieCredit;

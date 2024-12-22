import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieCredits } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CastMember from "../components/CastMember";

const FullCastPage = () => {
  const { id } = useParams();

  const { data: credits, error, isLoading, isError } = useQuery(
    ["credits", { id }],
    getMovieCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography variant="h6" color="error">{error.message}</Typography>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Full Cast
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {credits.cast.map((actor) => (
          <Grid key={actor.id} xs={12} sm={6} md={4} lg={3}>
            <CastMember
              profilePath={actor.profile_path}
              name={actor.name}
              character={actor.character}
              actorId={actor.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FullCastPage;

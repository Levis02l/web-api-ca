import React from "react";
import {CardContent, Typography, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";

const PersonSidebar = ({ person, children }) => {
  return (
    <Grid container spacing={5} style={{ padding: "15px" }}>

      <Grid size={{ xs: 3 }}>
      
          <CardMedia
            component="img"
            alt={person.name}
            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            sx={{ width: 300, height: 450, borderRadius: "8px" }}
          />
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {person.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Known For:
            </Typography>
            <Typography variant="body1">{person.known_for_department}</Typography>

            <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
              Birthday:
            </Typography>
            <Typography variant="body1">{person.birthday}</Typography>

            <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
              Place of Birth:
            </Typography>
            <Typography variant="body1">{person.place_of_birth}</Typography>

            <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
              Also Known As:
            </Typography>
            {person.also_known_as.map((alias, index) => (
              <Typography key={index} variant="body2">
                {alias}
              </Typography>
            ))}
          </CardContent>
       
      </Grid>
      <Grid size={{ xs: 9 }}>
        {children}
      </Grid>

    </Grid>


  );
};

export default PersonSidebar;

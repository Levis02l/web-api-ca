import React from "react";
import Typography from "@mui/material/Typography";


const CastDetails = ({ person }) => {  // Don't miss this!

  return (
    <>
    <Typography variant="h3" component="h1">
        {person.name}
      </Typography>

      <Typography variant="h4" component="h3">
        biography
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>

    </>
  );
};
export default CastDetails ;
import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchList = (e) => {
    e.preventDefault();
    context.removeFromMustWatch(movie); 
  };

  return (
    <IconButton
      aria-label="remove from watch list"
      onClick={handleRemoveFromWatchList}
    >
      <DeleteIcon color="secondary" fontSize="large" /> 
    </IconButton>
  );
};

export default RemoveFromWatchListIcon;

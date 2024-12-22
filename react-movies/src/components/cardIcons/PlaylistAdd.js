import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { MoviesContext } from "../../contexts/moviesContext";

const PlaylistAdd = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToLists = (e) => {
      e.preventDefault();
      context.addToMustWatch(movie); 
    };
  
    return (
      <IconButton aria-label="add to must watch list" onClick={handleAddToLists}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
};

export default PlaylistAdd;

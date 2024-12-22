import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const VideoCard = ({ video }) => {
    const videoUrl = `https://www.youtube.com/watch?v=${video.key}`;
    const thumbnailUrl = `https://img.youtube.com/vi/${video.key}/hqdefault.jpg`;
  
    return (
      <Card sx={{ maxWidth: 345, margin: "1em" }}>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <img src={thumbnailUrl} alt={video.name} width="100%" height="200" />
        </a>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {video.name}
          </Typography>
        </CardContent>
      </Card>
    );
  };

export default VideoCard;

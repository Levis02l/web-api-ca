import React from "react";
import Grid from "@mui/material/Grid2";
import VideoCard from "../VideoCard";
import { Typography } from "@mui/material";

const VideoList = ({ videos }) => {
    return (
        <>
            <Typography variant="h5" component="h2" gutterBottom style={{ margin: '1em 0' }}>
                Videos
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "1em" }}>
                {videos.map((video) => (
                    <Grid xs={12} sm={6} md={4} key={video.id}>
                        <VideoCard video={video} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default VideoList;

import CastMember from "../CastMember";
import React from 'react';
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";

const CastList = ({ cast,id }) => {

    return (
        <>
            <Typography variant="h5" component="h2" gutterBottom style={{ margin: '1em 0' }}>
                Top Billed Cast
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    overflowX: "auto",
                    gap: "1em",
                    padding: "1em 0",
                }}
            >
                {cast.map((actor) => (
                    <Box key={actor.id} sx={{ minWidth: 180 }}>
                        <CastMember
                            profilePath={actor.profile_path}
                            name={actor.name}
                            character={actor.character}
                            actorId={actor.id}
                        />
                    </Box>
                ))}
                <Button
                    component={Link}
                    to={`/movies/${id}/full-cast`}
                    variant="contained"
                    color="primary"
                    sx={{
                        alignSelf: "center",
                        minWidth: 150,
                        height: "100%",
                    }}
                >
                    View More
                </Button>
            </Box>
        </>
    );
};

export default CastList;
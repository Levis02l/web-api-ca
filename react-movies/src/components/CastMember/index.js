import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

const CastMember = ({ profilePath, name, character, actorId }) => {
    
    return (

        <Card sx={{ maxWidth: 180, margin: 'auto' }}>
            <Link to={`/person/${actorId}`}>
                <CardMedia
                    component="img"
                    height="250"
                    image={`https://image.tmdb.org/t/p/w200${profilePath}`}
                    alt={name}
                />
            </Link>
            <CardContent>
                <Link to={`/person/${actorId}` } style={{ textDecoration: 'none' }}>
                    <Typography variant="subtitle1" component="div" noWrap>
                        {name}
                    </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" noWrap>
                    {character}
                </Typography>
            </CardContent>
        </Card>

    );
};

export default CastMember;
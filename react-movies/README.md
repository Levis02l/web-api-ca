# Assignment 1 - ReactJS app.
Name: Haiqing Ji 20109223

## Overview.
It is a React TMDB Client to get details about Movies, Actors and trending contents out there! Users can search and filter movies and
movie details (trailer, cast etc).The app also supports third-party authentication using Firebase

### Features.
+ Third-party Authentication: Added Firebase-based Google authentication. Users can log in, and their login status is 
displayed as a dynamic avatar or "Login" button in the navigation bar.
+ Videos Section: Added a carousel to display trailers and featurettes for each movie on the Movie Details page, 
using the TMDB videos endpoint.
+ Actor Details Page: Created a new page displaying actor biographies, birth details, and known-for movies.
+ Recommendations:Added buttons to fetch and display movie recommendations
+ Improved Movie Filtering: Refined the filtering sidebar to allow filtering by rating, and sorting
+ Pagination

## Setup requirements.
+ Create a `.env` file in the root directory of the project and add the following content:
REACT_APP_TMDB_KEY=Your TMDB API key
+ npm install firebase

## API endpoints.
+ Upcoming movies - Path: movie/upcoming
+ Popular movies - Path: movie/popular
+ Movie recommendations - Path: movie/{id}/recommendations
+ Movie credits - Path: movie/{id}/credits
+ Credit details - Path: person/{id}
+ Credit movies - Path: person/{id}/movie_credits
+ Movie videos - Path: movie/{id}/videos

## Routing.
+ /movies/:id/recommendations - Displays the Recommendations Page, showing recommended movies based on a specific movie.
+ /movies/:id/full-cast - Displays the Full Cast Page for a specific movie, showing detailed cast information.
+ /movies/watchlist - Displays the Watchlist Page, which lists movies that users have added to their watchlist.`
+ /person/:id - Displays the Person Details Page for a specific actor or crew member, showing their biography and known works.
+ /movies/popular - Displays the Popular Movies Page, listing movies that are currently trending in popularity.
+ /movies/upcoming - Displays the Upcoming Movies Page, listing movies that are scheduled for release in the near future.

## Independent learning (If relevant).
+ https://firebase.google.com/docs/auth/flutter/federated-auth
+ https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/
+ https://mui.com/material-ui/react-dialog/
+ https://mui.com/material-ui/react-avatar/
+ https://mui.com/material-ui/react-menu/
# Assignment 2 - Web API.

Haiqing Ji 20109223

## Features.
 + User Authentication
 + User Favorites
 + Custom Reviews System
 + Integrated with TMDB API

## Setup requirements.
After cloning the repository, navigate to the movies-api and react-movies directories. Install the dependencies using npm install in each folder. For the API, set up a .env file in the movies-api directory with the necessary environment variables, such as NODE_ENV, PORT, MONGO_DB, and SECRET. The database URL and JWT secret must be provided as placeholders. Start the API using npm run dev in the movies-api folder, and start the React front-end using npm start in the react-movies folder. Ensure MongoDB is running and accessible for the API connection.

## API Configuration

To run the API locally, the following configuration steps need to be performed:
Create a .env file in the root directory of your project (if it doesn't already exist).
Add the following variables to the .env file, replacing the placeholder values with your own configuration:
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=YourMongoDBConnectionString
TMDB_KEY=YourTMDBApiKey
SECRET=YourJWTSecret

## API Design
Movies API
/api/movies | GET | Retrieves a list of movies with pagination support (page and limit parameters).
/api/movies/search | GET | Searches for movies by title using the title query parameter.
/api/movies/{id} | GET | Retrieves detailed information about a single movie.
/api/movies/{movieId}/reviews | GET | Retrieves all reviews for a specific movie.
/api/movies/{movieId}/reviews | POST | Creates a new review for a specific movie.
/api/movies/tmdb/discover | GET | Fetches discovered movies using the TMDB API.
/api/movies/tmdb/movie/{id} | GET | Fetches detailed information about a single movie using the TMDB API.
/api/movies/tmdb/movie/{id}/images | GET | Retrieves images for a movie using the TMDB API.
/api/movies/tmdb/movie/{id}/reviews | GET | Retrieves reviews for a movie using the TMDB API.
/api/movies/tmdb/upcoming | GET | Retrieves upcoming movies using the TMDB API.
/api/movies/tmdb/genres | GET | Retrieves all genres using the TMDB API.
/api/movies/tmdb/popular | GET | Retrieves popular movies using the TMDB API.
/api/movies/tmdb/movie/{id}/recommendations | GET | Retrieves recommendations for a movie using the TMDB API.
/api/movies/tmdb/movie/{id}/credits | GET | Retrieves cast and crew details for a movie using the TMDB API.
/api/movies/tmdb/person/{id} | GET | Retrieves detailed information about a person (actor) using the TMDB API.
/api/movies/tmdb/person/{id}/movie_credits | GET | Retrieves movies associated with a person using the TMDB API.
/api/movies/tmdb/movie/{id}/videos | GET | Retrieves video information for a movie using the TMDB API.


Users and Favorites API
/api/users | GET | Retrieves a list of all users.
/api/users | POST | Registers a new user or authenticates an existing user. Supports action=register query parameter.
/api/users/{id} | PUT | Updates user information for a specific user.
/api/users/{id}/favourite | POST | Adds a movie to the user's favorites.
/api/users/{id}/favourites | GET | Retrieves the list of favorite movies for a user.
/api/users/{id}/favourite/{movieId} | DELETE | Removes a specific movie from the user's favorites.

## Security and Authentication
The API uses JWT (JSON Web Token) for authentication and security.

Implementation
Users log in via the /api/users endpoint. Upon successful login, the server generates and returns a JWT token.
The client must include this token in the Authorization header for all requests to protected routes:Authorization: Bearer <token>

Protected Routes
The /api/movies route and all its subroutes are protected and require a valid JWT token. These include:
/api/movies | GET | Retrieves a list of movies.
/api/movies/tmdb/movie/{id} | GET | Retrieves detailed information about a single movie.
/api/movies/tmdb/movie/{id}/reviews | GET | Retrieves reviews for a specific movie.
/api/movies/tmdb/movie/{id}/recommendations | GET | Retrieves recommendations for a specific movie.
......

Error Handling
If the token is missing, invalid, or expired, the server returns a 401 Unauthorized error with a descriptive message.
This ensures that only authenticated users can access sensitive resources.

## Integrating with React App
Upon user login, the back-end returns a JWT token and user ID, which are stored in localStorage on the client side for subsequent authenticated requests. After login, the application fetches the user's favorite movies using the /api/users/{id}/favourites endpoint. These favorites are stored in MoviesContext, making them accessible throughout the app.

Users can dynamically add or remove favorites. When a movie is added to favorites, the front-end calls the /api/users/{id}/favourite endpoint with the movie ID and updates the UI in real-time. Similarly, removing a favorite calls /api/users/{id}/favourite/{movieId} to delete the favorite from the back-end and synchronizes the change with the front-end.

The home page retrieves the movie list via the /api/movies/tmdb/discover endpoint and dynamically marks movies that are already in the user's favorites. The navigation bar provides quick access to the favorites page, and the logout button clears the stored JWT and user ID, redirecting users back to the login page.
 

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   

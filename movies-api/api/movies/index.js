import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import Review from './reviewModel';
import {
    getMovies,
    getMovie,
    getGenres,
    getPopularMovies,
    getUpcomingMovies
  } from '../tmdb-api';
  

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Search movies by title （MongoDB)
router.get('/search', asyncHandler(async (req, res) => {
    const { title } = req.query;
    if (!title) {
        return res.status(400).json({ message: 'Title query parameter is required.' });
    }

    const movies = await movieModel.findByTitle(title); 
    if (movies.length > 0) {
        res.status(200).json(movies);
    } else {
        res.status(404).json({ message: 'No movies found with the given title.' });
    }
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/:movieId/reviews', asyncHandler(async (req, res) => {
    const { movieId } = req.params; 
    const reviews = await Review.find({ movieId: parseInt(movieId) }); 

    if (reviews.length > 0) {
        res.status(200).json({
            total_results: reviews.length,
            results: reviews,
        });
    } else {
        res.status(404).json({ message: 'No reviews found for this movie.' });
    }
}));

router.post('/:movieId/review', asyncHandler(async (req, res) => {
    try {
        const { movieId } = req.params;
        const { author, content, rating } = req.body;

        if (!movieId || !author || !content || !rating) {
            return res.status(400).json({ success: false, msg: 'Movie ID, author, content, and rating are required.' });
        }

        const validRatings = ["Excellent", "Good", "Average", "Poor", "Terrible"];
        if (!validRatings.includes(rating)) {
            return res.status(400).json({ success: false, msg: 'Invalid rating value.' });
        }

        const newReview = await Review.create({
            movieId: parseInt(movieId),
            author,
            content,
            rating,
            created_at: new Date()
        });

        res.status(201).json({ success: true, data: newReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));



router.get('/tmdb/discover', asyncHandler(async (req, res) => {
    const { page = 1 } = req.query; 
    try {
        const movies = await getMovies(page); 
        res.status(200).json(movies); 
    } catch (error) {
        console.error("Error fetching movies:", error.message);
        res.status(500).json({ message: error.message });
    }
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const { id } = req.params; 
    try {
        const movie = await getMovie(id);
        res.status(200).json(movie); 
    } catch (error) {
        console.error("Error fetching movie details:", error.message);
        res.status(500).json({ message: error.message }); 
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));



export default router;

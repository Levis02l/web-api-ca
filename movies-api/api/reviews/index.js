import express from 'express';
import asyncHandler from 'express-async-handler';
import Review from './reviewModel';

const router = express.Router();

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


export default router;

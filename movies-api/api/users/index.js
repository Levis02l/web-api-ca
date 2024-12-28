import express from 'express';
import User from './userModel';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Favourite from './favouriteModel';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// register(Create) User
// register(Create)/Authenticate User
router.post('/', asyncHandler(async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ success: false, msg: 'Username and password are required.' });
        }
        if (req.query.action === 'register') {
            await registerUser(req, res);
        } else {
            await authenticateUser(req, res);
        }
    } catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

// Update a user
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code: 200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});

//Add movies to user favourites
router.post('/:id/favourite', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { movieId } = req.body;

    if (!movieId) {
        return res.status(400).json({ message: 'Movie ID is required.' });
    }

    try {
        const favourite = await Favourite.create({ userId: id, movieId });
        res.status(201).json({ success: true, data: favourite });
    } catch (error) {
        if (error.code === 11000) {
            res.status(409).json({ message: 'Movie is already in the favourites list.' });
        } else {
            res.status(500).json({ message: 'Internal server error.', error });
        }
    }
}));

//Fetch user favourites
router.get('/:id/favourites', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const favourites = await Favourite.find({ userId: id }).populate('movieId');
    res.status(200).json({ success: true, data: favourites });
}));

//Remove movies from favourites
router.delete('/:id/favourite/:movieId', asyncHandler(async (req, res) => {
    const { id, movieId } = req.params;
    const result = await Favourite.findOneAndDelete({ userId: id, movieId });
    if (result) {
        res.status(200).json({ success: true, message: 'Movie removed from favourites.' });
    } else {
        res.status(404).json({ message: 'Movie not found in favourites.' });
    }
}));


async function registerUser(req, res) {
    // Add input validation logic here
    await User.create(req.body);
    res.status(201).json({ success: true, msg: 'User successfully created.' });
}

async function authenticateUser(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        const token = jwt.sign({ username: user.username }, process.env.SECRET);
        res.status(200).json({ success: true, token: 'BEARER ' + token, userId: user._id });
    } else {
        res.status(401).json({ success: false, msg: 'Wrong password.' });
    }
}




export default router;

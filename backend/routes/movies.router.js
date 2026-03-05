import express from 'express';
import getMoviesController from '../controllers/movies.controllers.js';

const router = express.Router();

router.get('/api/movies', getMoviesController);

export default router;
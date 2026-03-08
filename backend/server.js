import express from 'express';
import cors from 'cors';
import moviesRouter from './routes/movies.router.js';
const PORT = process.env.PORT || 3000;

const app = express();
 
app.use(express.json());
app.use(cors());

app.use('/', moviesRouter);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} `);
});
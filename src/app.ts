import express from 'express';
import postRouter from './routes/postRoutes';

const app = express();

app.use(express.json());

app.use('/posts', postRouter);

export default app;
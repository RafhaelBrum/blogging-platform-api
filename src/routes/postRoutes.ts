import { Router } from 'express';
import { createPostHandler, getAllPostsHandler, getPostByIdHandler } from "../controllers/postController";


const postRouter = Router();

postRouter.post('/', createPostHandler);
postRouter.get('/', getAllPostsHandler);
postRouter.get('/:id', getPostByIdHandler);

export default postRouter;
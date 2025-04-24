import { Router } from 'express';
import { createPostHandler, getAllPostsHandler, getPostByIdHandler, updatePostHandler } from "../controllers/postController";


const postRouter = Router();

postRouter.post('/', createPostHandler);
postRouter.get('/', getAllPostsHandler);
postRouter.get('/:id', getPostByIdHandler);
postRouter.put('/:id', updatePostHandler);

export default postRouter;
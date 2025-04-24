import { Router } from 'express';
import { createPostHandler, deletePostHandler, getAllPostsHandler, getPostByIdHandler, updatePostHandler } from "../controllers/postController";


const postRouter = Router();

postRouter.post('/', createPostHandler);
postRouter.get('/', getAllPostsHandler);
postRouter.get('/:id', getPostByIdHandler);
postRouter.put('/:id', updatePostHandler);
postRouter.delete('/:id', deletePostHandler);

export default postRouter;
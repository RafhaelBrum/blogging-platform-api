import { Router } from 'express';
import { createPostHandler, getAllPostsHandler } from "../controllers/postController";


const postRouter = Router();

postRouter.post('/', createPostHandler);
postRouter.get('/', getAllPostsHandler);

export default postRouter;
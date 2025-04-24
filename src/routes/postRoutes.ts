import { Router } from 'express';
import { createPostHandler } from "../controllers/postController";


const postRouter = Router();

postRouter.post('/', createPostHandler);

export default postRouter;
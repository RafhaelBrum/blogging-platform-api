import { Request, Response } from "express";
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from "../models/postModel";
import { PostInput } from "../types/post";
import validateData from "../utils/validator";

export async function createPostHandler(req: Request, res: Response) {
    try {
        const data: PostInput = req.body;
        const validation = validateData(data);
        if (!validation.valid) {
            res.status(400).json({ error: validation.error });
            return;
        }

        const post = await createPost(data);

        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getAllPostsHandler(req: Request, res: Response) {
    try {
        const term = req.query.term as string | undefined;

        const posts = await getAllPosts(term);

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export async function getPostByIdHandler(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const post = await getPostById(id);
        if (!post) {
            res.status(404).json({ error: '404 - Post Not Found' });
            return;
        }

        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export async function updatePostHandler(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const data: PostInput = req.body;
        const validation = validateData(data);
        if (!validation.valid) {
            res.status(400).json({ error: validation.error });
            return;
        }

        const post = await updatePost(id, data);
        if (!post) {
            res.status(404).json({ error: '404 - Post not found' });
            return;
        }

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export async function deletePostHandler(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const post = await deletePost(id);
        if (!post) {
            res.status(404).json({ error: '404 - Post Not Found' });
            return;
        }

        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
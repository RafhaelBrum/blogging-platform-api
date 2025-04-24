import { Request, Response } from "express";
import { createPost } from "../models/postModel";
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
        return;
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
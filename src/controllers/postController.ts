import { Request, Response } from "express";
import { createPost } from "../models/postModel";
import { PostInput } from "../types/post";

function validateData(data: PostInput): { valid: boolean; error?: string } {
    if (!data.title || !data.category || !data.content || !data.tags) return { valid: false, error: "Missing required fields" };
    if (typeof data.title !== 'string' || typeof data.category !== 'string' || typeof data.content !== 'string') return { valid: false, error: "Invalid data types" };
    if ([data.title, data.category, data.content].some(field => field === '')) return { valid: false, error: "Data has empty fields" };
    return { valid: true };
};

export async function createPostHandler(req: Request, res: Response) {
    try {
        const data: PostInput = req.body;
        const validation = validateData(data);
        if (!validation.valid) return res.status(400).json({ error: validation.error });

        const post = await createPost(data);
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
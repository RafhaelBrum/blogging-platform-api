import pool from '../db';
import { PostInput } from '../types/post';

export async function createPost(data: PostInput) {
    const datetime = new Date();
    const query = 'INSERT INTO posts (title, content, category, tags, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [data.title, data.content, data.category, data.tags, datetime, datetime];

    const res = await pool.query(query, values);
    console.log(res.rows[0]);
}
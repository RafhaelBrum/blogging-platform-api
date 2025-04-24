import pool from '../db';

export async function createPost(data: {
    title: string,
    content: string,
    category: string,
    tags: string[],
}) {
    const datetime = new Date();
    const query = 'INSERT INTO posts (title, content, category, tags, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [data.title, data.content, data.category, data.tags, datetime, datetime];

    const res = await pool.query(query, values);
    console.log(res.rows[0]);
}
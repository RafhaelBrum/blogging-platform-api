import pool from '../db';

let datetime = new Date();

export async function createPost(data: {
    title: string,
    content: string,
    category: string,
    tags: string[],
}) {
    const query = 'INSERT INTO posts (title, content, category, tags, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [data.title, data.content, data.category, data.tags, datetime, datetime];

    const res = await pool.query(query, values);
    console.log(res.rows[0]);
}
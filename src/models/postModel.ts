import pool from '../db';
import { PostInput } from '../types/post';

export async function createPost(data: PostInput) {
    const datetime = new Date();
    const query = 'INSERT INTO posts (title, content, category, tags, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [data.title, data.content, data.category, data.tags, datetime, datetime];

    const res = await pool.query(query, values);
    console.log(res.rows[0]);
};

export async function getAllPosts(term?: string) {
    if (term) {
        const query = 'SELECT * FROM posts WHERE title ILIKE $1 OR content ILIKE $1 OR category ILIKE $1';
        const values = [`%${ term }%`];
        const res = await pool.query(query, values);
        console.log(res.rows);
        return res.rows;
    }
    else {
        const res = await pool.query('SELECT * FROM posts');
        console.log(res.rows);
        return res.rows;
    }
};

export async function getPostById(id: number) {
    const query = 'SELECT * FROM posts WHERE ID = $1'
    const values = [id];

    const res = await pool.query(query, values);
    console.log(res.rows[0]);
    return res.rows[0];
};

export async function updatePost(id: number, data: PostInput) {
    const datetime = new Date();
    const query = 'UPDATE posts SET title = $1, content = $2, category = $3, tags = $4, updated_at = $5 WHERE id = $6 RETURNING *';
    const values = [data.title, data.content, data.category, data.tags, datetime, id];

    const res = await pool.query(query, values);
    console.log(res.rows[0]);
    return res.rows[0];
};

export async function deletePost(id: number) {
    const query = 'DELETE FROM posts WHERE ID = $1 RETURNING *';
    const values = [id];

    const res = await pool.query(query, values);
    console.log(res.rows[0]);
    return res.rows[0];
};
import { PostInput } from "../types/post";

export default function validateData(data: PostInput): { valid: boolean; error?: string } {
    if (!data.title || !data.category || !data.content || !data.tags) return { valid: false, error: "Missing required fields" };
    if (typeof data.title !== 'string' || typeof data.category !== 'string' || typeof data.content !== 'string') return { valid: false, error: "Invalid data types" };
    if ([data.title, data.category, data.content].some(field => field === '')) return { valid: false, error: "Data has empty fields" };
    if (!Array.isArray(data.tags)) return { valid: false, error: "Tags field isn't an array" };
    return { valid: true };
};
import { createPost } from "./postModel";

const obj = {
    title: "TitleEx",
    content: "ContentEx",
    category: "CategoryEx",
    tags: ["tag1", '"tag2']
};

createPost(obj);
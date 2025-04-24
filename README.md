# Blogging Platform API

roadmap.sh backend project - https://roadmap.sh/projects/blogging-platform-api

A simple RESTful API to manage blog posts. Create, read, update, delete, and filter posts — all via HTTP requests using tools like Postman or Insomnia.

---

## ✅ Features

- Create new blog posts with title, content, category, and tags
- Read all posts or a single post by ID
- Update post fields by ID
- Delete posts by ID
- Filter posts by search term (title, content, or category)
- Posts are stored in a PostgreSQL database

---

## 📦 Tech Stack

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- pg (node-postgres)

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/RafhaelBrum/blogging-platform-api.git
cd blogging-platform-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your database

Create a PostgreSQL database and update the `.env` file with your connection string:

```
DATABASE_URL=postgresql://user:password@localhost:5432/database_name
```

### 4. Build the project

```bash
npx tsc
```

### 5. Run the development server

```bash
npm run dev
```

---

## 📘 Usage

### Create a post

```http
POST /posts
```

**Body:**
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my post.",
  "category": "Tech",
  "tags": ["Node.js", "Backend"]
}
```

---

### Get all posts

```http
GET /posts
```

**With filter:**

```http
GET /posts?term=tech
```

---

### Get post by ID

```http
GET /posts/1
```

---

### Update a post

```http
PUT /posts/1
```

**Body:**
```json
{
  "title": "Updated Post",
  "content": "Updated content here.",
  "category": "Updated Category",
  "tags": ["updated", "tags"]
}
```

---

### Delete a post

```http
DELETE /posts/1
```

---

## ⚠️ Notes

- All endpoints follow RESTful conventions and return appropriate status codes (200, 201, 204, 400, 404, 500).
- `GET /posts?term=...` filters by `title`, `content`, or `category`.
- Make sure your PostgreSQL service is running and accessible.

---

## 📄 License

This project is for educational purposes only. Free to use and modify.
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// In-memory posts storage
let posts = [];
let idCounter = 0;

const app = express();
const PORT = process.env.PORT || 3001; // Port for BlogApp
const BASE_PATH = '/blogapp'; // Base path for all routes

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for serving static files (CSS, JS, images)
app.use(`${BASE_PATH}`, express.static("public"));

// ** Routes ** //

// BlogApp homepage
app.get(`${BASE_PATH}/`, (req, res) => {
    res.render("index", { posts });
});

// About page
app.get(`${BASE_PATH}/about`, (req, res) => {
    res.render("about");
});

// Dashboard for adding or editing posts
app.get(`${BASE_PATH}/dashboard`, (req, res) => {
    res.render("dashboard", { edit: false, pageTitle: "Add Post" });
});

// View a specific post
app.get(`${BASE_PATH}/post/:id`, (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (!post) return res.status(404).send("Post not found");

    res.render("post", { post });
});

// Add a new post
app.post(`${BASE_PATH}/`, (req, res) => {
    const { title, text } = req.body;
    const newPost = {
        id: idCounter++,
        title,
        text,
    };

    posts.push(newPost);
    res.redirect(`${BASE_PATH}/`);
});

// Delete a post
app.post(`${BASE_PATH}/delete-post`, (req, res) => {
    const { id } = req.body;
    posts = posts.filter(post => post.id != id);
    res.redirect(`${BASE_PATH}/`);
});

// Edit a post
app.post(`${BASE_PATH}/edit-product/:id`, (req, res) => {
    const { title, text } = req.body;
    const post = posts.find(p => p.id == req.params.id);
    if (!post) return res.status(404).send("Post not found");

    post.title = title;
    post.text = text;
    res.redirect(`${BASE_PATH}/`);
});

// Render the edit form
app.get(`${BASE_PATH}/edit-product/:id`, (req, res) => {
    const postId = req.params.id;
    const postToEdit = posts.find(post => post.id == postId);

    if (!postToEdit) return res.status(404).send("Post not found");

    res.render("dashboard", {
        edit: true,
        pageTitle: "Edit Post",
        post: postToEdit,
    });
});

// BlogApp form submission (example form in public)
app.post(`${BASE_PATH}/submit`, async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Form submission received:", { name, email, message });
    res.json({ success: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`BlogApp is running on http://localhost:${PORT}${BASE_PATH}`);
});
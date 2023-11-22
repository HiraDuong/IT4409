const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;



mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, 
});

// Định nghĩa Schema
const blogSchema = new mongoose.Schema({
  mssv: String,
  hoTen: String,
  title: String,
  content: String
});

const Blog = mongoose.model('Blog', blogSchema);

app.use(bodyParser.json());

// Routes
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/blogs', async (req, res) => {
  const blog = new Blog(req.body);
  try {
    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndUpdate(id, req.body);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/blogs/search/:title', async (req, res) => {
  const { title } = req.params;
  try {
    const blogs = await Blog.find({ title: new RegExp(title, 'i') });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const appDiv = document.getElementById('app');

// Function to fetch blogs from backend
async function fetchBlogs() {
  const response = await fetch('/api/blogs');
  const blogs = await response.json();
  return blogs;
}

// Function to render blogs
function renderBlogs(blogs) {
  appDiv.innerHTML = '<h2>List of Blogs</h2>';
  const ul = document.createElement('ul');
  blogs.forEach(blog => {
    const li = document.createElement('li');
    li.textContent = `${blog.title} by ${blog.hoTen}`;
    ul.appendChild(li);
  });
  appDiv.appendChild(ul);
}

// Fetch and render blogs on page load
document.addEventListener('DOMContentLoaded', async () => {
  const blogs = await fetchBlogs();
  renderBlogs(blogs);
});

// Example of adding a new blog (you can expand this for other CRUD operations)
document.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const blogData = {};
  formData.forEach((value, key) => {
    blogData[key] = value;
  });

  const response = await fetch('/api/blogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogData),
  });

  const newBlog = await response.json();

  // Refresh the list of blogs
  const blogs = await fetchBlogs();
  renderBlogs(blogs);

  // Clear the form
  form.reset();
});

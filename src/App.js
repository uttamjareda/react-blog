import React, { useState, useEffect } from 'react';
import BlogList from './components/BlogList';
import CreateBlog from './components/CreateBlog';
import styles from './components/Blog.module.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = () => {
    fetch('http://localhost:8080/blogs')
      .then(response => response.json())
      .then(data => {
        setBlogs(data); // Update the blogs state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  };

  useEffect(() => {
    fetchBlogs(); // Fetch blogs on component mount
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.createBlogContainer}>
        <CreateBlog onOperationComplete={fetchBlogs} />
      </div>
      <div className={styles.blogListContainer}>
        <BlogList blogs={blogs} onOperationComplete={fetchBlogs} />
      </div>
    </div>
  );
}

export default App;

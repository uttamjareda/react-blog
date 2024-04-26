import React, { useState } from 'react';
import styles from './Blog.module.css'; // Import the styles

function CreateBlog({ onOperationComplete }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
    .then(response => {
      if (response.ok) {
        setTitle('');
        setContent('');
        onOperationComplete(); // Refresh the blogs list
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className={styles.createBlogForm}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.createBlogInput}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          required
        />
        <textarea
          className={styles.createBlogTextarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Blog Content"
          required
        />
        <button className={styles.createBlogButton} type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;

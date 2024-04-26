import React from 'react';
import Blog from './Blog';
import styles from './Blog.module.css'; // Make sure this path is correct

function BlogList({ blogs, onOperationComplete }) {
  return (
    <div className={styles.blogList}>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} onOperationComplete={onOperationComplete} />
      ))}
    </div>
  );
}

export default BlogList;

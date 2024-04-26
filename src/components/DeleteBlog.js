// DeleteBlog.js
import React from 'react';
import styles from './Blog.module.css';

function DeleteBlog({ blogId, onConfirm }) {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            fetch(`http://localhost:8080/blogs/${blogId}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    onConfirm();
                }
            })
            .catch(error => console.error('Error:', error));
        }
    };

    return (
        <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
    );
}

export default DeleteBlog;

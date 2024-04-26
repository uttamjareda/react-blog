// EditBlog.js
import React, { useState } from 'react';
import styles from './Blog.module.css';

function EditBlog({ blog, onSave, onCancel }) {
    const [editedTitle, setEditedTitle] = useState(blog.title);
    const [editedContent, setEditedContent] = useState(blog.content);

    const handleSave = () => {
        fetch(`http://localhost:8080/blogs/${blog.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: editedTitle,
                content: editedContent
            }),
        })
        .then(response => {
            if (response.ok) {
                onSave();
            } else {
                throw new Error('Failed to update the blog');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className={styles.editForm}>
            <input
                className={styles.editInput}
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
                className={styles.editTextarea}
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className={styles.formActions}>
                <button className={styles.saveButton} onClick={handleSave}>Save</button>
                <button className={styles.cancelButton} onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default EditBlog;

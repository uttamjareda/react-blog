// Blog.js
import React, { useState } from 'react';
import EditBlog from './EditBlog';
import DeleteBlog from './DeleteBlog';
import styles from './Blog.module.css'; // Make sure this path is correct

function Blog({ blog, onOperationComplete }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div className={styles.blogItem}>
            {isEditing ? (
                <EditBlog
                    blog={blog}
                    onSave={() => {
                        setIsEditing(false);
                        onOperationComplete();
                    }}
                    onCancel={handleCancel}
                />
            ) : (
                <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <div className={styles.blogActions}>
                        <button className={styles.blogButton} onClick={handleEdit}>Edit</button>
                        <DeleteBlog
                            blogId={blog.id}
                            onConfirm={onOperationComplete}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blog;

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Blog.css';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <h1>This is Blog {blogs.length}</h1>
           <div className='blog-container'>
           {
                blogs.map(blog => <Post
                    key={blog.cca3}
                    blog={blog}
                ></Post>)
            }
           </div>
        </div>
    );
};

export default Blog;
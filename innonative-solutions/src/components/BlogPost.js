// src/components/BlogPost.js
import React from "react";
import "./BlogPost.css";

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>
        <em>
          {post.date} - {post.category}
        </em>
      </p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;

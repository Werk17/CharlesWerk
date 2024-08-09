// src/components/BlogPost.js
import React from "react";

const BlogPost = ({ post }) => {
  const date = new Date(post.date.seconds * 1000);

  // Format the date (e.g., 'August 8, 2024')
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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

// src/components/BlogList.js
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import BlogPost from "./BlogPost";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "blogPosts"));
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    filter === "All" ? posts : posts.filter((post) => post.category === filter);

  return (
    <div>
      <div className="blog-controls">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Software Development">Software Development</option>
          <option value="Mobile Development">Mobile Development</option>
        </select>
        <button onClick={() => setView(view === "grid" ? "list" : "grid")}>
          Toggle {view === "grid" ? "List" : "Grid"} View
        </button>
      </div>

      <div className={`blog-posts ${view}`}>
        {filteredPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

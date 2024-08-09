// src/components/BlogPostPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import BlogPost from "./BlogPost";

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "blogPosts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <BlogPost post={post} />
    </div>
  );
};

export default BlogPostPage;

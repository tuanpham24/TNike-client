import React, { useState, useEffect } from "react";
import { getAllPost } from "../../api/PostApi";
import "../../assets/css/blogs.css";
import "../../App.css";
import PostItem from "../../components/Post/PostItem";

export default function Blogs() {
  const [postList, setPostList] = useState([]);

  const handleGetAllPostList = () => {
    getAllPost().then(res => setPostList(res.data.postList));
  }

  useEffect(() => {
    handleGetAllPostList();
  }, []);

  const handleFormatDate = () => {

  }

  return (
    <div className="blogs container">
      <h1>Blogs</h1>
      {postList.map(post => {
        return (
          <PostItem 
            post={post}
          />
        );
      })}
    </div>
  );
}

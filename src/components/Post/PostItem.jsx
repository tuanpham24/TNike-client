import React from "react";
import "../../assets/css/blogs.css";
import "../../App.css";

export default function PostItem({post}) {
  return (
    <div className="post-item flex-container" key={post._id}>
      <div className="post-thumbnail">
        <img src={post.thumbnail} />
      </div>
      <div className="post-content">
        <h4 className="post-title">{post.title}</h4>
        <p className="post-description">{post.description}</p>
        <p className="time">{post.createdAt}</p>
      </div>
    </div>
  );
}

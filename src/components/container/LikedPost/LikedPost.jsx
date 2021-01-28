import React from "react";
import styles from "./Likedpost.module.css";

function LikedPost({ post }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["line"]}></div>
      <h2>{post.title}</h2>
      <p className={styles["text"]}>{post.text}</p>
      <div className={styles["info"]}>
        <h4>
          {post.owner.firstName} {post.owner.lastName}
        </h4>
        <p>{post.publishDate}</p>
      </div>
    </div>
  );
}

export default LikedPost;

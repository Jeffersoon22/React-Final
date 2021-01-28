import React from "react";
import styles from "./MyPost.module.css";

function MyPost({ pts }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["line"]}></div>
      <h2>{pts.title}</h2>
      <p className={styles["text"]}>{pts.text}</p>
      <div className={styles["info"]}>
        <h4>{pts.name}</h4>
        <p>{pts.date}</p>
      </div>
    </div>
  );
}

export default MyPost;

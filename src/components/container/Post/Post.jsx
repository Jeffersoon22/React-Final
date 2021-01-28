import React, { useState } from "react";
import styles from "./Post.module.css";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";
import { connect } from "react-redux";
import {
  likePost,
  unlikePost,
  addCommentToPost,
} from "../../../store/actions/postsActions";
import EmptyPage from "../../presentation/EmptyPage/EmptyPage";

function Post(props) {
  const [comment, setComment] = useState("");
  const onIconClick = (post) => {
    if (post.liked) {
      props.unlikePost(post.id);
    } else {
      props.likePost(post.id);
    }
  };

  const onCommentAdd = (id) => {
    setComment("");
    props.addComment({ id, comment: comment });
  };

  const updateInput = (event) => {
    setComment(event.target.value);
  };

  if (props.posts && props.posts.length) {
    return (
      <div>
        {props.posts.map((pst) => (
          <div className={styles["post-container"]}>
            <div className={styles["post-line"]}></div>
            <h1>{pst.title}</h1>
            <p className={styles["post-text"]}>{pst.text}</p>
            <div className={styles["post-info"]}>
              <h4>
                {pst.owner.firstName} {pst.owner.lastName}
              </h4>
              <p>{pst.publishDate}</p>
            </div>
            <div className={styles["post-actions"]}>
              <span style={{ transform: "translateY(14px)" }}>
                {pst.likes} people like this
              </span>
              <IconButton
                className={styles["post-button"]}
                edge="true"
                color="inherit"
                aria-label="menu"
                onClick={() => onIconClick(pst)}
              >
                <FavoriteIcon
                  style={{ color: pst.liked ? red[500] : "black" }}
                />
              </IconButton>
              <input
                type="text"
                className={styles["post-comment"]}
                placeholder="Comment"
                onChange={updateInput}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => onCommentAdd(pst.id)}
              >
                Comment
              </Button>
            </div>
            <div className={styles["post-comments"]}>
              {pst.comments.length ? (
                <div className={styles["added-comments"]}>
                  {pst.comments.map((com) => (
                    <p>{com}</p>
                  ))}
                </div>
              ) : (
                <p>There are no comments</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <EmptyPage />
        <p>Sorry, we could not find any posts</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    likePost: (post) => dispatch(likePost(post)),
    unlikePost: (post) => dispatch(unlikePost(post)),
    addComment: (post) => dispatch(addCommentToPost(post)),
  };
}

const mapStateToProps = (state) => ({
  posts: state.allPosts.allItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);

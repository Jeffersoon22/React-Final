import React, { useEffect } from "react";
import styles from "./Likedposts.module.css";
import LikedPost from "../../container/LikedPost/LikedPost";
import { connect } from "react-redux";
import { getLikedPosts } from "../../../store/actions/postsActions";
import EmptyPage from "../EmptyPage/EmptyPage";

function LikedPosts(props) {
  useEffect(() => {
    props.getLikedPosts();
  }, []);

  if (props.posts && props.posts.length) {
    return (
      <div>
        <h1>Liked Posts</h1>
        <div className={styles["liked-posts"]}>
          {props.posts.map((el) => (
            <LikedPost post={el} key={el.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <EmptyPage />
        <p>You do not have any liked posts</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getLikedPosts: () => dispatch(getLikedPosts()),
  };
}

const mapStateToProps = (state) => ({
  posts: state.allPosts.likedPosts,
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedPosts);

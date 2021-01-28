import React from "react";
import styles from "./MyPosts.module.css";
import MyPost from "../../container/MyPost/MyPost";
import Button from "@material-ui/core/Button";
import SimpleDialog from "../../container/AddPost/AddPost";
import { connect } from "react-redux";
import EmptyPage from "../EmptyPage/EmptyPage";

function MyPosts(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  if (props.posts && props.posts.length) {
    return (
      <div>
        <h1>My Posts</h1>
        <div>
          <br />
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add New Post
          </Button>
          <SimpleDialog open={open} onClose={handleClose} />
        </div>
        <div className={styles["my-posts"]}>
          {props.posts.map((el) => (
            <MyPost pts={el} key={el.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <EmptyPage />
        <p>You do not have any posts yet</p>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add New Post
        </Button>
        <SimpleDialog open={open} onClose={handleClose} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.allPosts.myPosts,
});

export default connect(mapStateToProps)(MyPosts);

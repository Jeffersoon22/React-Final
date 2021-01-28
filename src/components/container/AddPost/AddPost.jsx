import React, { useState } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import styles from "./AddPost.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addMyPost } from "../../../store/actions/postsActions";
import { connect } from "react-redux";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const [info, setInfo] = useState({
    name: "Nato Jafaridze",
    date: `${new Date()}`,
    title: "",
    text: "",
  });

  const [submitted, setSubmit] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const createPost = () => {
    setSubmit(true);
    let readyToSend;
    for (var key in info) {
      if (info[key] === "") {
        readyToSend = false;
      } else {
        readyToSend = true;
      }
    }
    if (readyToSend) {
      props.createMyPost(info);
      handleClose();
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Add New Post</DialogTitle>
      <div className={styles["create"]}>
        <TextField
          id="standard-basic"
          label="Title"
          className={styles["title"]}
          name="title"
          error={submitted && !info.title.length}
          helperText={
            submitted && !info.title.length ? "Please, enter add title" : ""
          }
          onChange={inputChange}
        />
        <br />
        <TextField
          className={styles["text"]}
          id="outlined-multiline-static"
          label="text"
          multiline
          rows={4}
          variant="outlined"
          name="text"
          error={submitted && !info.text.length}
          helperText={submitted && !info.text.length ? "Please, add text" : ""}
          onChange={inputChange}
        />
        <br />
        <Button variant="contained" color="primary" onClick={createPost}>
          Create Post
        </Button>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    createMyPost: (post) => dispatch(addMyPost(post)),
  };
}

export default connect(null, mapDispatchToProps)(SimpleDialog);

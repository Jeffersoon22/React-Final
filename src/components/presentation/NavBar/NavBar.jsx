import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import styles from "./NavBar.module.css";
import { logout } from "../../../services/authentication";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();
  let history = useHistory();
  function redirect(path) {
    history.push(`/${path}`);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => redirect("posts")}
          >
            <HomeIcon />
          </IconButton>
          <div className={styles["links_container"]}>
            <div className={styles["links"]}>
              <a onClick={() => redirect("posts")}>Posts</a>
              <a onClick={() => redirect("liked-posts")}>Liked Posts</a>
              <a onClick={() => redirect("my-posts")}>My Posts</a>
            </div>

            <div>
              <a onClick={() => logout()}>Log Out</a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

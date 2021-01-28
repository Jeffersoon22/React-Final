import React from "react";
import back from "../../../assets/img/back.png";
import styles from "./Login.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getUserToken, userLoginIn } from "../../../services/authentication";
import { reload } from "../../../reload";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  function redirect(path) {
    history.push(`/${path}`);
  }
  const loginUser = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    userLoginIn(data.email, data.password);
    reload();
  };

  if (getUserToken()) {
    return <Redirect to="/posts" />;
  } else {
    return (
      <div>
        <img
          src={back}
          alt="Welcome"
          className={styles["background"]}
          onSubmit={loginUser}
        />
        <form className={styles["form"]} onSubmit={loginUser}>
          <h1 className={styles["header"]}>Login</h1>
          <TextField
            required="true"
            id="email"
            label="Email"
            variant="outlined"
            className={styles["input"]}
          />
          <TextField
            required="true"
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            className={styles["input"]}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
          <a onClick={() => redirect("registration")}>Sign Up</a>
        </form>
      </div>
    );
  }
}

export default Login;

import React from "react";
import register from "../../../assets/img/register.png";
import styles from "./registration.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  getUserToken,
  userRegistration,
} from "../../../services/authentication";
import { reload } from "../../../reload";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Registration() {
  let history = useHistory();
  function redirect(path) {
    history.push(`/${path}`);
  }
  const registerUser = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    userRegistration(data.email, data.password);
    reload();
  };

  if (getUserToken()) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <img src={register} alt="Welcome" className={styles["background"]} />
      <form className={styles["form"]} onSubmit={registerUser}>
        <h1 className={styles["header"]}>Sign Up</h1>
        <TextField
          label="Name"
          variant="outlined"
          className={styles["input"]}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          className={styles["input"]}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          className={styles["input"]}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          className={styles["input"]}
        />
        <Button variant="contained" color="primary" type="submit">
          Registration
        </Button>
        <a onClick={() => redirect("login")}>Sign In</a>
      </form>
    </div>
  );
}
export default Registration;

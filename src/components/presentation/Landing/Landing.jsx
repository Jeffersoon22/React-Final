import React from "react";
import styled from "styled-components";
import banner from "../../../assets/img/banner.jpg";
import styles from "./Landing.module.css";
import Button from "@material-ui/core/Button";
import fontStyles from "../../../styles/fonts.module.css";
import { getUserToken } from "../../../services/authentication";
import { Redirect } from "react-router-dom";
import Dashboard from "../../container/Dashboard/Dashboard";

const Banner = styled.div`
  background: url(${banner});
  font-size: 32px;
  color: black;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
`;

function Landing() {
  if (getUserToken()) {
    return (
      <Dashboard/>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

export default Landing;

import React from "react";
import { logout } from "../../../services/authentication";
import Navbar from "../../presentation/NavBar/NavBar";


function Dashboard({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Dashboard;

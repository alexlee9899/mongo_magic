import React from "react";
import backend_url from "../config/api";

const LoginPage = () => {
  return (
    <div>
      <h1>
        <a href={backend_url}>Login</a>
      </h1>
    </div>
  );
}

export default LoginPage;
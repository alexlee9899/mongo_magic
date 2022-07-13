import React from "react";
import backend_url from "../config/api";


// Temperary login page for dev purpose
// disregard any change to this when merging to master
const LoginPage = () => {

  const login = (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetch(`${backend_url}/users/login`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          // 'Authorization': 'Bearer ' + localStorage.getItem('userToken')
          },
      body: JSON.stringify
      ({
        email: username,
        password: password
      })
  }).then(res => res.json())
  .then(res=>{
    if (res.token){
      localStorage.setItem('userToken', res.token);
      window.location.href = "/users/dashboard";
    }
  })
}

  return (
    <div>
      <h1>
        <a href={backend_url}>Login</a>
        Username:
        <input type="text" id='username'/>
        Password:
        <input type='text' id='password'></input>
        <button onClick={()=> login()}>login</button>
      </h1>
    </div>
  );
}

export default LoginPage;
import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { login, registerUser, activeShop } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    // console.log(email + " " + username + " " + password);
    // localStorage.Item("preferedCurrency", userPreferedCurrency);
    console.log(" in register axios ");
    Axios.post(`${process.env.REACT_APP_ENDPOINT}/api/users/register`, {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data) {
        dispatch(
          registerUser({
            username: username,
            email: email,
          })
        );

        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    });
  };

  return (
    <>
      <div className="bg-modal">
        <div className="modal-content">
          <div
            style={{
              marginTop: "30px",
              marginLeft: "20px",
              fontFamily: "Tahoma",
            }}
          >
            <h4>Create your account</h4>
            <p>Registration is easy.</p>
          </div>
          <form className="signin_form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                className="email"
                id="email"
                placeholder="Enter email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                className="username"
                id="username"
                placeholder="Enter username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                required
              />
            </div>

            <div className="htmlForm-group">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                className="password"
                id="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="forgot_password"></div>
            <button onClick={addUser} type="submit" className="btn btn-primary">
              Register
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => window.location.reload(false)}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default register;

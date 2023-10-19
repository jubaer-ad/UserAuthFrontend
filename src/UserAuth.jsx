import React, { useRef, useState } from "react";
import "./UserAuth.css";
import axios from "axios";

export const UserAuth = () => {
  const [action, setAction] = useState("Login");

  const [response, setResponse] = useState([]);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const passwordRef = useRef(null);

  async function submit(e) {
    e.preventDefault();

    try {
      var obj = {};
      var url = "";
      if (action === "Sign Up") {
        url = "https://localhost:44313/api/User/register";
        obj = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          name: nameRef.current.value,
          mobileNumber: mobileNumberRef.current.value,
        };
      } else {
        url = "https://localhost:44313/api/User/login";
        obj = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
      }

      const response = await axios.post(url, obj);
      setResponse(await response.data);
      // await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(obj),
      //   // body: obj,
      //   crossorigin: true,
      //   mode: "no-cors",
      // });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container header submit-container">
        <h1>{response.message}</h1>
      </div>
      <form onSubmit={submit}>
        <div className="container">
          <div className="header">
            <div className="tabs">
              <a
                onClick={() => {
                  setAction("Sign Up");
                }}
                className={`tab tab-lg text-2xl tab-lifted ${
                  action === "Login" ? "" : "tab-active"
                }`}
              >
                Sign Up
              </a>
              <a
                onClick={() => {
                  setAction("Login");
                }}
                className={`tab tab-lg text-2xl tab-lifted ${
                  action !== "Login" ? "" : "tab-active"
                }`}
              >
                Login
              </a>
            </div>
          </div>
          <div className="inputs">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            )}

            <div>
              <input
                ref={emailRef}
                type="Email"
                placeholder="Email"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            {action === "Login" ? (
              <div></div>
            ) : (
              <div>
                <input
                  ref={mobileNumberRef}
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            )}

            <div>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </div>
          <div className="submit-container">
            <button className="btn btn-accent" type="submit">
              {action}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

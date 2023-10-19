import React from "react";
import "./UserAuth.css";

export const UserAuth = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div id="name" className="input">
          <input type="text" />
        </div>
        <div id="email" className="input">
          <input type="email" />
        </div>
        <div id="password" className="input">
          <input type="password" />
        </div>
        <div id="mobile" className="input">
          <input type="text" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
      <button className="btn btn-active btn-accent">Accent</button>
    </div>
  );
};

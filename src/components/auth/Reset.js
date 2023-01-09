import React from "react";
import resetImg from "../../assets/forgot.svg";
import { AiOutlineClose } from "react-icons/ai";

const Reset = ({ onLogin }) => {
  return (
    <div className="main-container --flex-center">
      <div className="form-container reset">
        <form className="--form-control">
          <h2 className="--color-danger --text-center"> Reset Password</h2>
          <input type="email" className="--width-100" placeholder="Email" />
          <button className="--btn --btn-primary --btn-block">
            Reset Password
          </button>
          <span className="--text-sm --block --text-center --my2">
            We will send you reset link
          </span>
          <div className="close">
            <AiOutlineClose color="red" onClick={onLogin} />
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={resetImg} alt="login" />
      </div>
    </div>
  );
};

export default Reset;

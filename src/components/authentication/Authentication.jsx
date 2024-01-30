import React from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";
import { useGoogleLogin } from "@react-oauth/google";

const Authentication = ({ image }) => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      // Redirect to the dashboard only on successful login
      navigate("/dashboard");
    },
  });

  return (
    <div className="auth">
      <img src={image} alt="#" onClick={() => login()} />
    </div>
  );
};

export default Authentication;

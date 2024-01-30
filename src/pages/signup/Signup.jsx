import React from "react";
import "./Signup.css";
import InputBox from "../../components/inputbox/InputBox";
import Heading from "../../components/heading/Heading";
import Submitbutton from "../../components/submitbutton/Submitbutton";
import NormalText from "../../components/normaltext/NormalText";
import Authentication from "../../components/authentication/Authentication";
import Google_img from "../../assets/google_img.png";
import Facebook_img from "../../assets/facebook_img.png";
import Apple_img from "../../assets/apple_img.png";
import Gif from "../../components/gif/Gif";

function Signup() {
  return (
    <div className="container">
      <div className="left">
        <Gif />
      </div>
      <div className="right">
        <Heading heading="Welcome!" />
        <InputBox lable="Email Address" placeholder="umartinez@gmail.com" />
        <InputBox lable="Password" placeholder="........" flag={true} />
        <InputBox lable="Confirm Password" placeholder="........" flag={true} />
        <div className="terms">
          By signing up you agree with{" "}
          <a href="" style={{ color: "#1877f2", textDecoration: "none" }}>
            terms and conditions
          </a>
        </div>
        <Submitbutton lable="Sign up" />
        <div className="below-signup">
          <div className="line" />
          <NormalText text="Or Sign in with" />
          <div className="line" />
        </div>
        <div className="auth">
          <Authentication image={Google_img} />
          <Authentication image={Facebook_img} />
          <Authentication image={Apple_img} />
        </div>
        <NormalText text="Already have an account?" highlight="Log in" />
      </div>
    </div>
  );
}

export default Signup;

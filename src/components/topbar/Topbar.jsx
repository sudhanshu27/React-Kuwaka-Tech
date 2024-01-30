import React from "react";
import "./Topbar.css"
function Topbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3-alpha-sig.figma.com/img/9b26/6e15/b3dd817ffc827a7044a0b749837061b5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oxpc7ig5X~5s2yab-GZ7RcnSatdQW8aVyhGoQIt1XPN3Ic2J5xHGa1-IGSRZHzl6BbdXfuwRSNci894l0F3GPOShTuFe85z52ThuLZU5Cxt-OlBy3Sta7EL64YoMJE8kuoj9aw9cxxxqju76eNhGeo2bvWx0UHN5h1Gie85emuQ70ifFfxY08UWZW60nGLaT-0m4~XRs1IrWYav4eq3iEQ1jryBiSmL9n8~Dg3HwtgwFnWHUAfXBNXSGpT-L50PC76P3kzliWvgC7kAT-YO~m3SDa-pAtkYf79n9UyZsbtNaqbGNzEum8w2RjHOSFttLGxR6HdOlEzepDchWEygEXA__"
          alt="#"
        />
      </div>
      <div className="left-nav">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MEAL PLANS</li>
        <li>WORKOUT ROUTINE</li>
      </div>
      <div className="right-nav">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
}

export default Topbar;

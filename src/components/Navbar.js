import React from "react";
import fill from "../images/fill.png";

function navbar() {
  return (
    <div className="header">
      <div className="nav">
        <img src={fill} alt="" className="logo-img" />
        <h1 className="travel">My Travel Journal</h1>
      </div>
    </div>
  );
}

export default navbar;

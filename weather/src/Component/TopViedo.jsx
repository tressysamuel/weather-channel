import React from "react";

import Button from "../Component/Button";
import "../Styles/TopViedo.css";

import { skys } from "../Assests/Images/index";

function TopViedo() {
  return (
    <div className="sky-card">
      <div>
        {" "}
        <h1 className="top">Top Viedo</h1>
      </div>
      <div>
        <img src={skys} alt="" className="skys-img" />
      </div>
      <h2 className="despite">Despite Reputational Risk, NASA to Study UFOs</h2>
      <Button text="Read  More" />
    </div>
  );
}

export default TopViedo;

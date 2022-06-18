import React from "react";
import "../Styles/TopStory.css";
import Button from "../Component/Button";

import { rainkolkata } from "../Assests/Images/index";
import { airpollution2 } from "../Assests/Images/index";
import { odisharain } from "../Assests/Images/index";
import { keralacloud } from "../Assests/Images/index";
import { floodassam } from "../Assests/Images/index";

function TopStory({ heading }) {
  return (
    <div>
      <h1 className="top-heading">{heading}</h1>
      <div className="top-card">
        <div className="rainkolkata-card">
          <img src={rainkolkata} className="rainkolkata" />

          <div className="amid">
            <span className="amid-monsoon">
              Amid Monsoon Anticipation, West Bengal, Odisha, Jharkhand, Bihar To Be Drenched
            </span>
          </div>
        </div>
        <div className="floodassam-card">
          <img src={floodassam} className="floodassam" />
          <div className="floodassam-content">
            <span>Amid Monsoon Anticipation, West Bengal, Odisha, Jharkhand, Bihar</span>
          </div>
        </div>
        <div className="rainkolkata-card">
          <img src={rainkolkata} className="rainkolkata" />

          <div className="amid">
            <span className="amid-monsoon">
              Amid Monsoon Anticipation, West Bengal, Odisha, Jharkhand, Bihar To Be Drenched
            </span>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="airpollutio-image">
          <img src={airpollution2} className="airpollution" />

          <div className="delhi-text">
            <span className="delhi-air">Delhi's Air Pollution Levels Could Reduce Life Expenctancy by 10 years..</span>
          </div>
        </div>

        <div className="odisharain-image">
          <img src={odisharain} alt="" className="odisharain" />
          <div className="odisharain-text">
            <span>When will Monsoon Arrive in Bhubaneswar,Rest of Odisa?</span>
          </div>
        </div>
        <div className="northIndia-img">
          <img src={keralacloud} alt="" className="north-india" />
          <div className="north-india">
            <span>North India in for Pre--monsoon Rains from june 16-18</span>
          </div>
        </div>
      </div>
      <Button text="See More" />
    </div>
  );
}

export default TopStory;

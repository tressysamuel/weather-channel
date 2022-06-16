import React from "react";
import "../Styles/TopStory.css";

import { rainkolkata } from "../Assests/Images/index";
import { airpollution2 } from "../Assests/Images/index";
import { odisharain } from "../Assests/Images/index";
import {keralacloud} from "../Assests/Images/index";

function TopStory() {
  return (
    <div>
      <h1>Top Stories</h1>
      <div>
        <img src={rainkolkata} className="rainkolkata" />
      </div>
      <div className="amid">
        <span>
          Amid Monsoon Anticipation, West Bengal, Odisha, Jharkhand, Bihar To Be Drenched By Heavy Rains from June 15-18
        </span>
      </div>
      <div className="southwest">
        <span>
          The southwest monsoon will move into some parts of Odisha, Gangetic West Bengal, Jharkhand and Bihar during the
          next two to three days.
        </span>
        <span className="Read-more">Read More  </span>
      </div>
      <div>
        <img src={airpollution2} className="airpollution" />
      </div>
      <div className="delhi-text">
        <span className="delhi-air">Delhi's Air Pollution Levels Could Reduce Life Expenctancy by 10 years..</span>
      </div>

      <div>
        <img src={odisharain} alt="" className="odisharain" />
        <div className="odisharain-text">
          <span>
            When will Monsoon Arrive in Bhubaneswar,Rest of Odisa?
          </span>
        </div>
      </div>
      <div>
        <img src={keralacloud} alt="" className="north-india"/>
        <div className="north-india">
          <span>North India in for Pre--monsoon Rains from june 16-18</span>
        </div>
      </div>
    </div>
  );
}

export default TopStory;

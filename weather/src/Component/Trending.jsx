import React from "react";
import { airpollution2 } from "../Assests/Images/index";
import { odisharain } from "../Assests/Images/index";
import { keralacloud } from "../Assests/Images/index";

import "../Styles/Trending.css";

function Trending() {
  return (
    <div>
      <div>
        <h1 className="trending">Trending</h1>
      </div>

      <div>
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
      </div>
    </div>
  );
}

export default Trending;

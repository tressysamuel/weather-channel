import React from "react";
import HeaderSection from "../Component/HeaderSection";
import TopStory from "../Component/TopStory";
import WeatherAcross from "../Component/WeatherAcross";
import Trending from "../Component/Trending";
import TopViedo from "../Component/TopViedo";

//  import Button from "../Component/Button";

import "../Styles/main-page.css";

function MainPage() {
  return (
    <div>
      <HeaderSection />
     
        <div className="main-page">
           <TopStory heading="Top Stories" /> 
          <WeatherAcross />
          <Trending />  
          <TopViedo />

          {/* <Button/>   */}
        </div>
      </div>
   
  );
}

export default MainPage;

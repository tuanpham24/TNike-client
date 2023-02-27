import React from "react";
import Slide from "../../components/Slide/Slide";
import Video from "../../components/Video/Video";
import "./Home.css";

function Home() {

  return (
    <>
      <div className="content container">
        <div className="flex-container">
          <div className="flex-item home-video">
            <Video />
          </div>
          <div className="flex-item home-slide">
            {/* <Slide /> */}
            {/* <Video></Video> */}
            <h1>Slider</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;

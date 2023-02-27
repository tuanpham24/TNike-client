import React from "react";

export default function Video() {

  return (
    <>
      <div className="video-responsive">
        <iframe 
          width="560" 
          height="315"
          src="https://www.youtube.com/embed/5L04JwtimN0"
          title="TNike intro" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </>
  );
}


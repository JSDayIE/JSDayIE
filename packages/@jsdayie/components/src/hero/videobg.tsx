import React from "react";

function VideoBg() {
  if (window && window.innerWidth > 576) {
    return (
      <div className="videoBg">
        <video
          poster="https://jsdayie.azureedge.net/data/media/bg.png"
          src="https://jsdayie.azureedge.net/data/media/bg.webm"
          autoPlay
          loop
          muted
        />
      </div>
    );
  }
  return null;
}

export default VideoBg;

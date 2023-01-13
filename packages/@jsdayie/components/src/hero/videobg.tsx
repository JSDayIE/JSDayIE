import React from "react";

function VideoBg() {
  if (window && window.innerWidth >= 768) {
    return (
      <div className="videoBg">
        <video
          poster="/media/bg.png"
          src="/media/promo.webm"
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

import React from "react";
import dynamic from "next/dynamic";

const VideoBgDynamic = dynamic(() => import("./videobg"), {
  ssr: false,
});

export const Hero: React.FC = () => {
  return (
    <div>
      <div className="hero_bg">
        <div className="container">
          <div className="col-md-12 hero_img_wrapper">
          </div>
        </div>
      </div>
      <VideoBgDynamic />
    </div>
  );
};

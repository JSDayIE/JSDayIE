import React from "react";
import dynamic from "next/dynamic";

const VideoBgDynamic = dynamic(() => import("./videobg"), {
  ssr: false,
});

export interface HeroProps {
  page: "conference" | "awards";
}

export const Hero: React.FC<HeroProps> = (props) => {
  const { page } = props;
  return (
    <div>
      <div className="hero_bg">
        <div className="container">
          <div className="col-md-12 hero_img_wrapper">
            <div
              className={page === "conference" ? "hero_img" : "awards_hero_img"}
            />
          </div>
        </div>
      </div>
      <VideoBgDynamic />
    </div>
  );
};

import React from "react";
import { HashTagArray } from "@jsdayie/domain";

interface HashMapProps {
  items: HashTagArray;
  children: React.ReactNode;
}

export const HashMap: React.FC<HashMapProps> = props => {
  return (
    <div className="cloud">
      {props.items.map((hashtag, index) => {
        const className = hashtag.isPrimary
          ? "primaryHahstag"
          : "secondaryHahstag";
        return (
          <div key={index} className={`hashtag ${className}`}>
            {hashtag.hashtag}
          </div>
        );
      })}
    </div>
  );
}

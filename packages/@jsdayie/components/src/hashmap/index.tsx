import React from "react";
import { HashTagArray } from "@jsdayie/domain";

interface HashMapProps {
  items: HashTagArray;
}

export const HashMap: React.FC<HashMapProps> = (props) => {
  const { items } = props;
  return (
    <div className="cloud">
      {items.map((hashtag) => {
        const className = hashtag.isPrimary
          ? "primaryHahstag"
          : "secondaryHahstag";
        return (
          <div key={hashtag.hashtag} className={`hashtag ${className}`}>
            {hashtag.hashtag}
          </div>
        );
      })}
    </div>
  );
};

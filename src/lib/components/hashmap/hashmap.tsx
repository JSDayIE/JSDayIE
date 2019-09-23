import React from "react";
import { HashTagArray } from "../../../lib/domain/types";

interface HashMap {
  items: HashTagArray;
}

export function HashMap(props: HashMap) {
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

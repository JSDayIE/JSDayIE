import React from "react";
import { Fetchable } from "react-fetchable";
import {
  trendingTopicsValidator,
  TrendingTopic,
  urlArrayValidator
} from "../../../lib/domain/types";
import {
  Spinner,
  HashMap,
  Container,
  Section,
  Gallery
} from "../../../lib/components";

export function Promo() {
  return (
    <Container>
      <Section
        title="Trending topics on Twitter in Ireland (20/09/19)"
        size={1}
      >
        <Fetchable
          url="/data/trending_topics.json"
          validator={trendingTopicsValidator}
          loading={() => <Spinner size={100} />}
          error={(e: Error) => <div>Error: {e.message}</div>}
          success={(topics: TrendingTopic) => (
            <HashMap items={topics.yearOne}></HashMap>
          )}
        />
      </Section>
      <Section title="Gallery" size={1}>
        <Fetchable
          url="/data/gallery/2019.json"
          validator={urlArrayValidator}
          loading={() => <Spinner size={100} />}
          error={(e: Error) => <div>Error: {e.message}</div>}
          success={(urls: string[]) => <Gallery urls={urls} />}
        />
      </Section>
    </Container>
  );
}

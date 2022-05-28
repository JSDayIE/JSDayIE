import React from "react";
import {
  trendingTopicsValidator,
  TrendingTopic,
  urlArrayValidator
} from "@jsdayie/domain";
import {
  Spinner,
  HashMap,
  Container,
  Section,
  Gallery
} from "@jsdayie/components";
import { RESOURCES } from "@jsdayie/config";

export function Promo() {
  return (
    <Container>
      <Section
        title="Trending topics on Twitter in Ireland (20/09/19)"
        size={1}
      >
        <Fetchable
          url={RESOURCES.trendingTopics}
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
          url={RESOURCES.gallery}
          validator={urlArrayValidator}
          loading={() => <Spinner size={100} />}
          error={(e: Error) => <div>Error: {e.message}</div>}
          success={(urls: string[]) => <Gallery urls={urls} />}
        />
      </Section>
    </Container>
  );
}

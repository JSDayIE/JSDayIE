import React from "react";
import { TrendingTopic } from "@jsdayie/domain";
import { HashMap, Container, Section, Gallery } from "@jsdayie/components";

interface PromoProps {
  urls: string[];
  topics: TrendingTopic;
}

export const Promo: React.FC<PromoProps> = (props) => {
  const { topics, urls } = props;
  return (
    <Container>
      <Section
        title="Trending topics on Twitter in Ireland (20/09/19)"
        size={1}
      >
        <HashMap items={topics.yearOne} />
      </Section>
      <Section title="Gallery" size={1}>
        <Gallery urls={urls} />
      </Section>
    </Container>
  );
};

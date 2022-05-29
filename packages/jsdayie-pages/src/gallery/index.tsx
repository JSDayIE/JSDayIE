import React from "react";
import { Container, Section, Gallery, GalleryProps } from "@jsdayie/components";

export const GalleryPage: React.FC<GalleryProps> = (props) => {
  const { urls } = props;
  return (
    <Container>
      <Section title="JSDayIE 2019 gallery" size={1}>
        <Gallery urls={urls} />
      </Section>
    </Container>
  );
};

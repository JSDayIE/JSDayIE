import React from "react";
import { Container, Section, Gallery, GalleryProps } from "@jsdayie/components";

export const GalleryPage: React.FC<GalleryProps> = (props) => {
  return (
    <Container>
      <Section title="JSDayIE 2019 gallery" size={1}>
        <Gallery urls={props.urls} />
      </Section>
    </Container>
  );
}

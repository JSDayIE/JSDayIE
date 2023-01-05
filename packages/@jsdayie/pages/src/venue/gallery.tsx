import React from "react";
import { Container, Section } from "@jsdayie/components";
import ImageGallery from "react-image-gallery";

export const GalleryPage: React.FC<{ urls: string[] }> = (props) => {
  const { urls } = props;
  const photos = urls.map((url) => ({ original: url }));
  return (
    <Container>
      <Section title="JSDayIE 2019 gallery" size={1}>
        <ImageGallery items={photos} showThumbnails showBullets autoPlay />
      </Section>
    </Container>
  );
};

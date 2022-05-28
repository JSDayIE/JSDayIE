import React from "react";
import { Container, Section, Gallery, GalleryProps } from "@jsdayie/components";

export const GalleryPage: React.FC<GalleryProps> = (props) => {
  const error = (e: Error) => <div>Error: {e.message}</div>;
  const success = (urls: string[]) => <Gallery urls={urls} />;
  return (
    <Container>
      <Section title="JSDayIE 2019 gallery" size={1}>
      {
        (() => {
          if (props instanceof Error) {
              return error(props);
          } else {
              return success(props.urls);
          }
        })()
      }
      </Section>
    </Container>
  );
}

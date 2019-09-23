import React from "react";
import { Fetchable } from "react-fetchable";
import { urlArrayValidator } from "../../../lib/domain/types";
import { Spinner, Container, Section, Gallery } from "../../../lib/components";

export function GalleryPage() {
  return (
    <Container>
      <Section title="JSDayIE 2019 gallery" size={1}>
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

import React from "react";
import { Section, Container } from "@jsdayie/components";
import { InfoEntryArray } from "@jsdayie/domain";
import { InfoItem } from "./info_item";

export interface InfoProps {
  data: InfoEntryArray;
}

export const Info: React.FC<InfoProps> = (props) => {
  const { data } = props;
  return (
    <Container>
      <Section title="Info" size={1}>
        <p>
          In this section, you should be able to find the answer to any
          questions that you may have.
        </p>
        <div className="row">
          {data.map((e) => {
            return (
              <div className="col-md-6" key={e.title}>
                <InfoItem
                  title={e.title}
                  summary={e.summary}
                  id={e.id}
                  thumbnail={e.thumbnail}
                />
              </div>
            );
          })}
        </div>
      </Section>
    </Container>
  );
};

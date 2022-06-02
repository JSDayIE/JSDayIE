import * as React from "react";
import { Section, Container } from "@jsdayie/components";
import { Speaker } from "../speakers/speaker";

export function Team() {
  return (
    <Container>
      <Section title="The organizing team" size={1}>
        <p>
          JSDayIE is organized some by members of the dev community in Ireland.
        </p>
        <div className="row">
          <div className="col-md-4">
            <Speaker
              details={{
                hide: false,
                name: "Irene Yeriskin",
                role: "Software Engineer",
                company: "Oliver Wyman",
                bio: "Irene is a Software Engineer at Oliver Wyman and the Chair of Inclusion and Diversity of JSDayIE.",
                links: {
                  linkedin:
                    "https://www.linkedin.com/in/irene-yeriskin-64328659/",
                  twitter: "https://twitter.com/rene_iy",
                },
                pic: "https://jsdayie.azureedge.net/data/media/irene_yeriskin.jpg",
                talk: {
                  title: "Inclusion and Diversity Chair",
                  abstract: "",
                },
              }}
            />
          </div>
          <div className="col-md-4">
            <Speaker
              details={{
                hide: false,
                name: "Remo H. Jansen",
                role: "CEO",
                company: "Wolk Software",
                bio: "Remo is the CEO of Wolk Software, a former Microsoft MVP and lead organizer of JSDayIE.",
                links: {
                  github: "https://github.com/remojansen",
                  linkedin: "https://www.linkedin.com/in/remojansen/",
                  twitter: "https://twitter.com/RemoHJansen",
                  web: "http://www.remojansen.com/",
                },
                pic: "https://jsdayie.azureedge.net/data/media/remo-jansen.png",
                talk: {
                  title: "General Chair",
                  abstract: "",
                },
              }}
            />
          </div>
        </div>
      </Section>
    </Container>
  );
}

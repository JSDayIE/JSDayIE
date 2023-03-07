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
                country: "🇪🇸",
                city: "Malaga",
                bio: "Irene is a Software Engineer at Oliver Wyman and the Chair of Inclusion and Diversity of JSDayIE.",
                links: {
                  linkedin:
                    "https://www.linkedin.com/in/irene-yeriskin-64328659/",
                  twitter: "https://twitter.com/rene_iy",
                },
                pic: "/media/irene_yeriskin.jpg",
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
                name: "Davy Engone",
                company: "Hackages & Techlingo",
                role: "Founder",
                country: "🇳🇱",
                city: "Amsterdam",
                pic: "/media/speakers_2019/davy_engone.jpg",
                bio: "Davy Engone is the founder and head of engineering at Hackages where he is building a team of developers and designers. He recently launched Techlingo, a brand that helps recruiters learn about the IT landscape and aims to close the gap between devs and recruiters.",
                links: {
                  twitter: "https://twitter.com/davyengone",
                  web: "https://www.davyengone.io",
                  github: "https://github.com/davyengone",
                  youtube: "https://www.youtube.com/@davyengone",
                  linkedin: "https://www.linkedin.com/in/davyengone/",
                },
                talk: {
                  title: "Master of Ceremonies",
                  abstract: "",
                },
                hide: false,
              }}
            />
          </div>
          <div className="col-md-4">
            <Speaker
              details={{
                hide: false,
                name: "Remo H. Jansen",
                role: "Founder & CEO",
                company: "Wolk Software",
                country: "🇮🇪",
                city: "Dublin",
                bio: "Remo is the CEO of Wolk Software, a former Microsoft MVP and lead organizer of JSDayIE.",
                links: {
                  github: "https://github.com/remojansen",
                  linkedin: "https://www.linkedin.com/in/remojansen/",
                  twitter: "https://twitter.com/RemoHJansen",
                  web: "http://www.remojansen.com/",
                },
                pic: "/media/remo-jansen.png",
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

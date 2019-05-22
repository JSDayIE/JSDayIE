import * as React from "react";
import { Section, Container } from "../../../lib/components";
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
                                role: "",
                                company: "Inclusion and Diversity Chair",
                                bio: "Irene is a Software Engineer at Oliver Wyman, WomenWhoCode Dublin director and the Chair of Inclusion and Diversity of JSDayIE.",
                                links: {
                                    linkedin: "https://www.linkedin.com/in/irene-yeriskin-64328659/",
                                    twitter: "https://twitter.com/rene_iy",
                                },
                                pic: "/media/irene_yeriskin.jpg",
                                talk: {
                                    title: "",
                                    abstract: ""
                                }
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Speaker
                            details={{
                                hide: false,
                                name: "Sarah Gavra Boland",
                                role: "",
                                company: "Accessibility Chair",
                                bio: "Sarah is an Assistive Technology (AT) Facilitator with Saint John of God Community Services since 2013.",
                                links: {
                                    linkedin: "https://www.linkedin.com/in/sarahgavraboland/",
                                    twitter: "https://twitter.com/SarahGBoland"
                                },
                                pic: "/media/sarah_gavra.jpg",
                                talk: {
                                    title: "",
                                    abstract: ""
                                }
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Speaker
                            details={{
                                hide: false,
                                name: "Remo H. Jansen",
                                role: "",
                                company: "General Chair",
                                bio: "Remo is the CEO of Wolk Software, a Microsoft MVP and the organizer of the Dublin TypeScript meetup and lead organizer of JSDayIE.",
                                links: {
                                    github: "https://github.com/remojansen",
                                    linkedin: "https://www.linkedin.com/in/remojansen/",
                                    twitter: "https://twitter.com/RemoHJansen",
                                    web: "http://www.remojansen.com/"
                                },
                                pic: "/media/remo_jansen.jpg",
                                talk: {
                                    title: "",
                                    abstract: ""
                                }
                            }}
                        />
                    </div>
                </div>
            </Section>
        </Container>
    );
}

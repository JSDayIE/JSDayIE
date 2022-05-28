import React from "react";
import { Section, Container } from "@jsdayie/components";
import { InfoItem } from "./info_item";
import { PATHS } from "@jsdayie/config";

function getEntries() {
    return [
        {
            title: "FAQ",
            summary: "Take a look to some of the most frequently asked questions and their answers. Including topics such as dietary requirements and travel accomodation.",
            path: PATHS.faq,
            thumbnail: "/media/icons/faq.png"
        },
        {
            title: "Services",
            summary: "This is a preliminary list of services we’re offering on-site, so you know what you can expect when attending JSDayIE.",
            path: PATHS.services,
            thumbnail: "/media/icons/service.png"
        },
        {
            title: "Accessibility",
            summary: "JSDayIE aims to be an inclusive and accessible conference and we do have some accessibility initiatives that help us to set a good baseline.",
            path: PATHS.accessibility,
            thumbnail: "/media/icons/accessibility.png"
        },
        {
            title: "Travel, Hotels and Transport",
            summary: "We collected a bit of information about travel to and from JSDayIE, how to get around Dublin.",
            path: PATHS.travel,
            thumbnail: "/media/icons/travel.png"
        },
        {
            title: "Why you should attend JSDayIE?",
            summary: "JSDayIE 2023 is a tech conference dedicated to the JavaScript community in Ireland featuring some of the best JS professionals and organizations.",
            path: PATHS.whyAttend,
            thumbnail: "/media/icons/attendee.png"
        },
        {
            title: "The organizing team",
            summary: "Would you like to find out who is behind JSDayIE? Visit this page to meet the members of our team!",
            path: PATHS.team,
            thumbnail: "/media/icons/team.png"
        },
        {
            title: "How to convince your boss to buy you a ticket for JSDayIE?",
            summary: "You write JS all day. You are your team’s frontend or Node.js expert (or want to become one). You are leading a team of engineers, or just starting...",
            path: PATHS.whyEmployee,
            thumbnail: "/media/icons/ticket.png"
        },
        {
            title: "Why your organization should sponsor JSDayIE?",
            summary: "Contributing to the healthy growth of the JavaScript community in Ireland benefits everyone.",
            path: PATHS.whySponsor,
            thumbnail: "/media/icons/sponsor.png"
        }
    ];
}

export class Info extends React.Component {
  render() {
    const entries = getEntries();
    return (
      <Container>
        <Section title="Info" size={1}>
            <p>
                In this section, you should be able to find the answer to any questions that you may have.
            </p>
            <div className="row">
                {
                    entries.map((e, i) => {
                        return (
                            <div className="col-md-6">
                                <InfoItem
                                    title={e.title}
                                    summary={e.summary}
                                    path={e.path}
                                    thumbnail={e.thumbnail}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </Section>
      </Container>
    );
  }
}

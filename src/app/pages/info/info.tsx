import React from "react";
import { Section, Container } from "../../../lib/components";
import { InfoEntry } from "./info_entry";
import { PATHS } from "../../config/routing";

function getEntries() {
    return [
        {
            title: "FAQ",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            path: PATHS.faq,
            thumbnail: "/media/icons/faq.png"
        },
        {
            title: "Services",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            path: PATHS.services,
            thumbnail: "/media/icons/service.png"
        },
        {
            title: "Accessibility",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            path: PATHS.accessibility,
            thumbnail: "/media/icons/accessibility.png"
        },
        {
            title: "Travel, Hotels and Transport",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            path: PATHS.travel,
            thumbnail: "/media/icons/travel.png"
        },
        {
            title: "Why you should attend JSDayIE?",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            path: PATHS.whyAttend,
            thumbnail: "/media/icons/attendee.png"
        },
        {
            title: "The organizing team",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            path: PATHS.team,
            thumbnail: "/media/icons/team.png"
        },
        {
            title: "How to convince your boss to buy you a ticket for JSDayIE?",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            path: PATHS.whyEmployee,
            thumbnail: "/media/icons/ticket.png"
        },
        {
            title: "Why your organization should sponsor JSDayIE?",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                                <InfoEntry
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

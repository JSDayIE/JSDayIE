import React from "react";
import { Section, Container, Table, Button } from "@jsdayie/components";
import { IAwards } from "@jsdayie/domain";
import Image from "next/image";
import { Award } from "./award";
import { Winner } from "./winner";

export interface AwardsProps extends IAwards {
  isPreview: boolean;
}

export const Awards: React.FC<AwardsProps> = (props) => {
  const { winners, categories, isPreview } = props;
  if (winners.length > 0) {
    return (
      <Container>
        <Section title="The JSAwardsIE 2023 winners" size={1}>
          <p>
            JSAwardsIE recognizes individuals and businesses for their
            contributions to open source javascript projects and other kinds of
            engagements, such as research and innovation, public talks,
            technical blog posts and tutorials, podcasts, technical books, etc.
          </p>
          <br />
          <div className="row">
            {categories.map((category) => {
              const winner = winners.find((w) => w.id === category.id);
              if (winner) {
                return (
                  <div className="col-md-6">
                    <Winner award={category} winner={winner} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </Section>
      </Container>
    );
  }
  return (
    <Container>
      <Section
        title="The first JavaScript Community Awards in Ireland"
        size={1}
      >
        <p>
          As part of JSDayIE 2023, we are launching the first edition of the
          JavaScript Awards Ireland: JSAwardsIE 2023. JSAwardsIE is a community
          award intended to recognize outstanding community leaders and
          community contributions within the JavaScript community in Ireland.
        </p>
        <br />
        <Image
          alt="JSAwardsIE"
          src="/media/awards_galaxy_2023.png"
          width="500"
          height="458"
        />
        <br />
        <br />
        <p>
          The JSAwardsIE 2023 will be part of JSDayIE 2023. The award ceremony
          will take place during the JSDayIE 2023 after-party. If you wish to
          join as a member of the audience, you will need to purchase a ticket
          for JSDayIE. However, you don&apos;t need a ticket to be nominated or
          to nominate somebody.
        </p>
      </Section>
      <Section title="The award categories" size={1}>
        <p>
          JSAwardsIE recognizes individuals and businesses for their
          contributions to open source javascript projects and other kinds of
          engagements, such as research and innovation, public talks, technical
          blog posts and tutorials, podcasts, technical books, etc.
        </p>
        <br />
        <div className="row">
          {categories.map((category) => (
            <div className="col-md-6">
              <Award isPreview={isPreview} details={category} />
            </div>
          ))}
        </div>
      </Section>
      <Section title="Rules & perks" size={1}>
        <p>
          We are inviting the JavaScript community in Ireland to nominate
          individuals and organizations that deserve to be recognized for their
          contributions to the healthy growth of the JavaScript community in
          Ireland.
        </p>
        <p>
          The JSAwardsIE nominations are open to everyone. However, nomiantions
          must adhere to the following rules:
        </p>
        <Table
          headers={["The JSAwards Rules"]}
          rows={[
            [
              {
                key: "rule_0",
                content: (
                  <p className="award-rule">
                    Nominees and attendees must adhere to our code of conduct.
                  </p>
                ),
              },
            ],
            [
              {
                key: "rule_1",
                content: (
                  <p className="award-rule">
                    Nominated Open source projects must be owned by an
                    individual or an organization based on the island of
                    Ireland.
                  </p>
                ),
              },
            ],
            [
              {
                key: "rule_2",
                content: (
                  <p className="award-rule">
                    Nominated individuals or organizations must be based on the
                    island of Ireland.
                  </p>
                ),
              },
            ],
            [
              {
                key: "rule_3",
                content: (
                  <p className="award-rule">
                    Nominated individuals cannot be members of the organization
                    of JSDayIE and JSAwardsIE.
                  </p>
                ),
              },
            ],
            [
              {
                key: "rule_4",
                content: (
                  <p className="award-rule">
                    Only one nomination per person per category is allowed.
                    Attempts to manipulate the nominations, such as using bots,
                    will result in the automatic disqualification of the
                    nominee.
                  </p>
                ),
              },
            ],
          ]}
        />
        <p>
          The JSAwardsIE team will review the nominations and select the winners
          based on the amount and the quality of the nominee&apos;s
          contributions to the JavaScript community in Ireland.
        </p>
        <Table
          headers={["Deadline", "Date"]}
          rows={[
            [
              {
                key: "cfp_step2_title",
                content: "Nominations close",
              },
              { key: "cfp_step2_date", content: "July 2023" },
            ],
            [
              { key: "cfp_step3_title", content: "Award winners selection" },
              { key: "cfp_step3_date", content: "August 2023" },
            ],
            [
              {
                key: "cfp_step4_title",
                content: "JSAwardsIE ceremony",
              },
              { key: "cfp_step4_date", content: "26th September 2023" },
            ],
          ]}
        />
        <p>
          JSAwardsIE will invite the winners of each award category to the award
          ceremony that will take place during the JSDayIE after-party. If you
          become one of the lucky winners of one of the JSAwardsIE categories,
          you will receive the following perks.
        </p>
        <Table
          headers={["JSAwardsIE Winner Perks"]}
          rows={[
            [{ key: "perk_1", content: "Free JSDayIE ticket" }],
            [
              {
                key: "perk_2",
                content: "Extra ticket if somebody is joining you",
              },
            ],
            [{ key: "perk_3", content: "JSAwardsIE trophy & certificate" }],
            [
              {
                key: "perk_4",
                content: "Be part of our press campaign",
              },
            ],
          ]}
        />
      </Section>
      <Section title="Sponsor an award category" size={1}>
        <p>
          Sponsoring a JSAwardsIE category is a great way to show the JavaScript
          community in Ireland that your organization is committed to
          contributing to the healthy growth of the JavaScript community in
          Ireland.
        </p>
        <p>
          JSAwardsIE awards categories recognize JavaScript community leaders
          and influencers. Sponsoring an award exposes your brand to the
          influencer&apos;s audience and the JSDayIE audience. Sponsoring a
          JSAwardsIE category can also help you to establish your brand as one
          of the industry leaders in the JavaScript space.
        </p>
        <br />
        <Button href="https://bit.ly/SponsorJSDayIE2023Now" color="warning">
          Download our prospectus
        </Button>
        <br />
        <br />
        <p>Or</p>
        <Button href="mailto:info@jsday.ie" color="warning">
          Become a sponsor
        </Button>
      </Section>
    </Container>
  );
};

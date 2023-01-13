import React from "react";
import { Section, Container } from "@jsdayie/components";
import Image from "next/image";

export const Welcome: React.FC = () => {
  return (
    <Container>
      <div className="center mt-5">
        <Image src="/media/hero.png" width={500} height={182} />
      </div>
      <Section
        title="The first JavaScript conference in Ireland is back!"
        size={1}
      >
        <p>
          <span className="remember">JSDayIE 2023</span> is a 1-day single track
          tech conference dedicated to the JavaScript community in Ireland
          featuring 500 attendees and some of the best JavaScript professionals
          and organizations.
        </p>
        <p>
          JSDayIE was the first JavaScript conference in Ireland in 2019. After
          the COVID pandemic. The 2nd edition of JSDayIE will take place on{" "}
          <span className="remember">September 26th 2023</span> at{" "}
          <span className="remember">The Round Room at the Mansion House</span>{" "}
          in Dawson Street, <span className="remember">Dublin, Ireland</span>.
        </p>
        <p className="mt-3">
          JSDayIE is a day to celebrate the JavaScript community in Ireland and
          it is presented by{" "}
          <a href="http://www.wolksoftware.com">Wolk Software</a> with support
          for the initiative from our sponsors.
        </p>
        <a
          className="btn btn-outline-warning btn-lg"
          href="https://ti.to/wolk-software-limited/jsdayie-2023/"
        >
          Get your ticket now!
        </a>
      </Section>
    </Container>
  );
};

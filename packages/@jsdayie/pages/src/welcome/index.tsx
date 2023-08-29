import React from "react";
import { Section, Container } from "@jsdayie/components";
import Image from "next/image";

export const Welcome: React.FC = () => {
  return (
    <Container>
      <div className="center mt-5">
        <Image
          alt="26th September 2023, Dublin, Ireland. JSDayIE"
          src="/media/hero.png"
          width={500}
          height={182}
        />
      </div>
      <Section
        title="The first JavaScript conference in Ireland is back!"
        size={1}
      >
        <p>
          <span className="remember">JSDayIE 2023</span> is a day to celebrate
          the JavaScript community in Ireland. It is a 1-day single track tech
          conference dedicated to the JavaScript community in Ireland featuring
          over 300 attendees and some of the best JavaScript professionals and
          organizations.
        </p>
        <p>
          The 2nd edition of JSDayIE will take place on{" "}
          <span className="remember">September 26th 2023</span> at{" "}
          <span className="remember">The Round Room at the Mansion House</span>{" "}
          in Dawson Street, <span className="remember">Dublin, Ireland</span>.
          The after party will take place at
          <span className="remember">Cafe en Seine</span>, also in Dawson
          Street.
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

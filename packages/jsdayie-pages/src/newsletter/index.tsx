import React, { useState } from "react";
import { Section, Container } from "@jsdayie/components";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <Container>
      <Section title="Newsletter" size={1}>
        <form
          action="https://jsday.us18.list-manage.com/subscribe/post?u=b4348a611b9d5932915880916&amp;id=4c43f518fc"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <p>
              Don&apos;t miss any update about JSDayIE subscribe to our
              newsletter.
            </p>
            <input
              type="email"
              value={email}
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="Type your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_b4348a611b9d5932915880916_4c43f518fc"
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe Now!"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button btn btn-outline-warning btn-lg"
                onChange={() => undefined}
              />
            </div>
          </div>
        </form>
      </Section>
    </Container>
  );
};

import React, { useState } from "react";
import { Section, Container } from "@jsdayie/components";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <Container>
      <Section title="Newsletter" size={1}>
        <form
          action="https://wolksoftware.us10.list-manage.com/subscribe/post?u=0ce8d0ae852b92a8957a8d9a7&amp;id=9ebf6de6c8"
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
                name="b_0ce8d0ae852b92a8957a8d9a7_9ebf6de6c8"
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
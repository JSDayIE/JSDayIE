import React from "react";
import { Section, Container } from "../../../lib/components";

interface NewsletterProps {}

interface NewsletterState {
  email: string;
}

export class Newsletter extends React.Component<NewsletterProps, NewsletterState> {
  public constructor(props: NewsletterProps) {
    super(props);
    this.state = {
      email: ""
    };
  }
  public render() {
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
                  <p>Don't miss any update about JSDayIE subscribe to our newsletter.</p>
                  <input
                      type="email"
                      value={this.state.email}
                      name="EMAIL"
                      className="email"
                      id="mce-EMAIL"
                      placeholder="Type your email address"
                      onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <br/>
                  <div style={{position: "absolute", left: "-5000px" }} aria-hidden="true">
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
                          onChange={() => void(0)}
                      />
                  </div>
              </div>
          </form>
        </Section>
      </Container>
    );
  }
}

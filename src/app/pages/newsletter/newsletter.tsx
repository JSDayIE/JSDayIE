import React from "react";
import { Section, Container, Button } from "../../../lib/components";

export class Newsletter extends React.Component {
  render() {
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
                      value=""
                      name="EMAIL"
                      className="email"
                      id="mce-EMAIL"
                      placeholder="Type your email address"
                      onChange={() => void(0)}
                  />
                  <br/>
                  <div style={{position: "absolute", left: "-5000px" }} aria-hidden="true">
                      <input
                          type="text"
                          name="b_b4348a611b9d5932915880916_4c43f518fc"
                          value=""
                          onChange={() => void(0)}
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
        <Section title="Follow us!" size={1}>
          <p>
            Join the conversation on our social media channels to stay up-to-date on JSDayIE.
          </p>
          <div className="row social">
            <div className="col-md-3 network">
              <Button href="https://twitter.com/JSDayIE">
                <i className="fab fa-twitter"></i>
              </Button>
            </div>
            <div className="col-md-3 network">
              <Button href="https://www.youtube.com/channel/UCUPILOYOw8pbBWuKEaqI1EQ">
                <i className="fab fa-youtube"></i>
              </Button>
            </div>
            <div className="col-md-3 network">
              <Button href="https://www.facebook.com/Jsdayie-336263463661254">
                <i className="fab fa-facebook"></i>
              </Button>
            </div>
            <div className="col-md-3 network">
              <Button href="https://www.linkedin.com/company/jsdayie">
                <i className="fab fa-linkedin-in"></i>
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    );
  }
}

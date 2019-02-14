import React from "react";
import Container from "../../lib/components/container/container";
import Section from "../../lib/components/section/section";

class Venue extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Venue">
          <p>
            JSDayIE 2019 will be hosted at The Round Room at the The Mansion House in Dublin, Ireland.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img className="venueMediaItem" src="/media/venue1.png" />
            </div>
            <div className="col-md-6">
              <iframe
                className="venueMediaItem"
                src="https://www.youtube.com/embed/X-6Q6OxY4fg?controls=0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              >
              </iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <iframe
                className="venueMediaItem"
                src="https://www.youtube.com/embed/EMX22h9zpOc?controls=0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              >
              </iframe>
            </div>
            <div className="col-md-6">
              <img className="venueMediaItem" src="/media/venue2.jpg" />
            </div>
          </div>
          <br/>
          <p>
            The Mansion House has been the official residence of the Lord Mayor of Dublin since 1715 and t is located in Dawson Street, right in
            the heart of Dublin and it is equiped with state-of-the-art lighting and audio visual systems.
          </p>
        </Section>
      </Container>
    );
  }
}

export default Venue;

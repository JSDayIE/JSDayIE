import React from "react";
import Section from "../../../lib/components/section/section";

export class Venue extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Section title="The event venue">
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
        <Section title="The after party venue">
          <p>
            The after party will take place in just 100 meters away from The Round Room at Cafe en Seine.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img className="venueMediaItem" src="/media/after-venue-2.jpg" />
            </div>
            <div className="col-md-6">
              <iframe
                className="venueMediaItem"
                src="https://www.youtube.com/embed/SPxqF3vIxeA?controls=0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img className="venueMediaItem" src="/media/after-venue.jpg" />
            </div>
            <div className="col-md-6">
              <img className="venueMediaItem" src="/media/after-venue-3.jpg" />
            </div>
          </div>
          <br/>
          <p>
            Cafe en Seine, one of Dublin’s most iconic and stunning venues.
            Nestled in the heart of Dublin’s city centre on Dawson Street,
            Cafe en Seine was established in 1993 and quickly became a
            go-to destination for locals and visitors to the city.
          </p>
        </Section>
      </React.Fragment>
    );
  }
}

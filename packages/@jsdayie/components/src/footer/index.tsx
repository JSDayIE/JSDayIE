import React from "react";

interface FooterProps {
  year: number;
  name: string;
  href: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { year, name, href } = props;
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p>
              JSDayIE is presented by{" "}
              <a href="http://www.wolksoftware.com/">Wolk Software Limited</a>{" "}
              with ❤️ for the JavaScript community. It is made possible thanks
              to the support of our sponsors and the collaboration of many of
              the members of the JavaScript community in Ireland.
            </p>
            <p>
              Copyright &copy; {year} - {currentYear}&nbsp;
              <a href={href}>{name}</a>.
            </p>
          </div>
          <div className="col-md-3">
            <h1>Follow us!</h1>
            <div className="row">
              <div className="col-3">
                <a
                  target="_blank"
                  href="https://twitter.com/JSDayIE"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
              </div>
              <div className="col-3">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC6CFGCJjA9GsOwZehQjfarQ"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube" />
                </a>
              </div>
              <div className="col-3">
                <a
                  target="_blank"
                  href="https://www.facebook.com/Jsdayie-336263463661254"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook" />
                </a>
              </div>
              <div className="col-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/jsdayie"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

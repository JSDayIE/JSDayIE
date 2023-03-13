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
    <div className="footer corner_container">
      <div className="horizontal_break_1" />
      <div className="corner-left-1" />
      <div className="corner-right-1" />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="vertical-break-1" />
            <p>
              JSDayIE is presented by{" "}
              <a href="http://www.wolksoftware.com/">Wolk Software Limited</a>{" "}
              with 💛 for the JavaScript community. It is made possible thanks
              to the support of our sponsors and the collaboration of many of
              the members of the JavaScript community in Ireland.
            </p>
            <ul>
              <li>
                <a href="https://bit.ly/JSDayIEDataPrivacyPolicy">
                  Data privacy policy
                </a>
              </li>
              <li>
                <a href="https://bit.ly/JSDayIETermsAndConditions">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="mailto:info@jsday.ie">Email us</a>
              </li>
            </ul>
            <p>
              Copyright &copy; {year} - {currentYear}&nbsp;
              <a href={href}>{name}</a>.
            </p>
          </div>
          <div className="col-md-4">
            <h1>Follow us!</h1>
            <div className="row">
              <div className="col-2">
                <a
                  target="_blank"
                  href="https://twitter.com/JSDayIE"
                  rel="noreferrer"
                >
                  <i title="Twitter logo" className="fab fa-twitter" />
                </a>
              </div>
              <div className="col-2">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC6CFGCJjA9GsOwZehQjfarQ"
                  rel="noreferrer"
                >
                  <i title="YouTube logo" className="fab fa-youtube" />
                </a>
              </div>
              <div className="col-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/Jsdayie-336263463661254"
                  rel="noreferrer"
                >
                  <i title="Facebook logo" className="fab fa-facebook" />
                </a>
              </div>
              <div className="col-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/jsdayie"
                  rel="noreferrer"
                >
                  <i title="LinkedIn logo" className="fab fa-linkedin-in" />
                </a>
              </div>
              <div className="col-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/jsdayie/"
                  rel="noreferrer"
                >
                  <i title="Instagram logo" className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

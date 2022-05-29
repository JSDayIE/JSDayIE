import React from "react";

function VideoBg() {
  if (window.innerWidth > 576) {
    return (
      <div className="videoBg">
        <video
          poster="/media/bg.png"
          src="/media/bg.webm"
          autoPlay
          loop
          muted
        />
      </div>
    );
  }
  return null;
}

export const Hero: React.FC = () => {
  return (
    <div>
      <div className="hero_bg">
        <div className="container">
          <table className="hero">
            <tbody>
              <tr>
                <td className="hero_logo">
                  <img
                    alt="logo"
                    src="/media/jslogo.png"
                    className="hero_img"
                  />
                </td>
                <td className="hero_title">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <h3 className="hero_h3">
                            26th September 2023 Dublin, Ireland
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h1 className="hero_h1">DayIE</h1>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h2 className="hero_h2">
                    A tech conference dedicated to the JavaScript community in
                    Ireland
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <VideoBg />
    </div>
  );
};

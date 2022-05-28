import React from "react";

function VideoBg() {
  if (window.innerWidth > 576) {
    return (
      <div className="videoBg">
        <video
          poster="/media/bg.png"
          src="/media/bg.webm"
          autoPlay={true}
          loop={true}
          muted={true}
        />
      </div>
    );
  } else {
    return null;
  }
}

export class Hero extends React.Component {
  public render() {
    return (
      <div>
        <div className="hero_bg">
          <div className="container">
            <table className="hero">
              <tbody>
                <tr>
                  <td className="hero_logo">
                    <img src="/media/jslogo.png" className="hero_img" />
                  </td>
                  <td className="hero_title">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <h3 className="hero_h3">
                              20th September 2019 Dublin, Ireland
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
  }
}

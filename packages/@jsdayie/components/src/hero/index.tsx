import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const VideoBgDynamic = dynamic(() => import("./videobg"), {
  ssr: false,
});

export const Hero: React.FC = () => {
  return (
    <div>
      <div className="hero_bg">
        <div className="container">
          <table className="hero">
            <tbody>
              <tr>
                <td className="hero_logo">
                  <Image
                    alt="logo"
                    src="/media/jslogo.png"
                    className="hero_img"
                    width="190"
                    height="190"
                    style={{
                      width: "190px",
                      height: "190px",
                    }}
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
      <VideoBgDynamic />
    </div>
  );
};

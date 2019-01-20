import React from "react";
import "./hero.css";
import logo from "./jslogo.png";

class Hero extends React.Component {
    public render() {
        return (
            <div className="hero_bg">
                <div className="container">
                    <table className="hero">
                        <tbody>
                            <tr>
                                <td className="hero_logo">
                                    <img src={logo} className="hero_img" />
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
                                    <h2 className="hero_h2">Welcome to JSDayIE 2019</h2>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Hero;

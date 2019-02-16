import React from "react";
import Section from "../../../lib/components/section/section";
import Button from "../../../lib/components/button/button";

export class Talks extends React.Component {
  render() {
    return (
    <Section title="Talks">
        <p>Do you want to give a talk?</p>
        <p>Do not think about it. Access and sign up!</p>
        <table>
            <thead>
                <tr>
                    <th>Important Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1st September 2018</td>
                </tr>
            </tbody>
        </table>
        <br/>
        <Button>Submit your proposal</Button>
        <Button>Learn more about the CFP</Button>
    </Section>
    );
  }
}
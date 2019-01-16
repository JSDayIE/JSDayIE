import React from "react";
import "./table.css";

interface TableProps {
    title: string;
}

class Table extends React.Component<TableProps> {
    public render() {
        return (
            <table>
                {this._renderHeader()}
                {this._renderBody()}
            </table>
        );
    }
    private _renderHeader() {
        return (
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Activity</th>
                </tr>
            </thead>
        );
    }
    private _renderBody() {
        return (
            <tbody>
                <tr>
                    <td>8:00-9:00</td>
                    <td>Registration &amp; Breakfast</td>
                </tr>
            </tbody>
        );
    }
}

export default Table;

const activities = [
    { startTime: "8:00", endTime: "9:00", title: "Registration &amp; Breakfast" },
    { startTime: "9:00", endTime: "9:25", title: "Keynote" },
    { startTime: "9:30", endTime: "9:55", title: "Talk 1" },
    { startTime: "10:00", endTime: "10:25", title: "Talk 2" },
    { startTime: "", endTime: "", title: "Talk 3" },
    { startTime: "", endTime: "", title: "Talk 4" },
    { startTime: "", endTime: "", title: "Talk 5" },
    { startTime: "", endTime: "", title: "Talk 6" },
    { startTime: "", endTime: "", title: "Talk 7" },
    { startTime: "", endTime: "", title: "Talk 8" },
    { startTime: "", endTime: "", title: "Talk 9" },
    { startTime: "", endTime: "", title: "Talk 10" },
    { startTime: "", endTime: "", title: "Talk 11" },
    { startTime: "", endTime: "", title: "Talk 12" }
];


/*
<td>10:30 - 10:55</td>
<td>Talk 3</td>
</tr>
<tr>
<td>10:55 - 11:10</td>
<td>Small Break</td>
</tr>
<tr>
<td>11:10 - 11:35</td>
<td>Talk 4</td>
</tr>
<tr>
<td>11:40 - 12:05</td>
<td>Talk 5</td>
</tr>
<tr>
<td>12:10 - 12:35</td>
<td>Talk 6</td>
</tr>
<tr>
<td>12:40 - 14:00</td>
<td>Lunch & Networking</td>
</tr>
<tr>
<td>14:00 - 14:25</td>
<td>Talk 7</td>
</tr>
<tr>
<td>14:30 - 14:45</td>
<td>Talk 8</td>
</tr>
<tr>
<td>15:00 - 15:25</td>
<td>Talk 9</td>
</tr>
<tr>
<td>15:30 - 15:55</td>
<td>Small Break</td>
</tr>
<tr>
<td>16:00 - 16:25</td>
<td>Talk 10</td>
</tr>
<tr>
<td>16:30 - 16:55</td>
<td>Talk 11</td>
</tr>
<tr>
<td>17:00 - 17:25</td>
<td>Talk 12</td>
</tr>
<tr>
<td>17:30 - 18:00</td>
<td>Closing Remarks & Group Pic</td>
*/

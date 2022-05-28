import React from "react";

type Row = (JSX.Element | string)[];

interface TableProps {
  headers: string[];
  rows: Row[];
  rowClass?: (row: Row) => string;
}

export class Table extends React.Component<TableProps> {
  public render() {
    return (
      <div className="table-responsive">
        <table className="table_table">
          {this._renderHeader(this.props.headers)}
          {this._renderBody(this.props.rows)}
        </table>
      </div>
    );
  }
  private _renderHeader(headers: string[]) {
    return (
      <thead>
        <tr className="table_thead_tr">
          {headers.map((h, i) => (
            <th className="table_thead_th" key={i}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
  private _renderBody(rows: (JSX.Element | string)[][]) {
    const rowClass = this.props.rowClass
      ? this.props.rowClass
      : (row: Row) => "";
    return (
      <tbody>
        {rows.map((r, i) => {
          return (
            <tr key={i} className={`table_tbody_tr ${rowClass(r)}`}>
              {r.map((c, i) => (
                <th className="table_tbody_td" key={i}>
                  {c}
                </th>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

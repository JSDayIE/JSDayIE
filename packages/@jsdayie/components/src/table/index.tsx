import React from "react";

type Row = (JSX.Element | string)[];

interface TableHeaderProps {
  headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = (props) => {
  const { headers } = props;
  return (
    <thead>
      <tr className="table_thead_tr">
        {headers.map((h) => (
          <th className="table_thead_th" key={`table_header_${h}`}>
            {h}
          </th>
        ))}
      </tr>
    </thead>
  );
};

interface TableBodyProps {
  rows: Row[];
  rowClass?: (row: Row) => string;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
  const { rowClass, rows } = props;
  return (
    <tbody>
      {rows.map((r) => {
        return (
          <tr
            key={`table_row_${r}`}
            className={`table_tbody_tr ${rowClass ? rowClass(r) : ""}`}
          >
            {r.map((c) => (
              <th className="table_tbody_td" key={`table_row_cell_${c}`}>
                {c}
              </th>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

interface TableProps {
  headers: string[];
  rows: Row[];
  rowClass?: (row: Row) => string;
}

export const Table: React.FC<TableProps> = (props) => {
  const { headers, rows, rowClass } = props;
  return (
    <div className="table-responsive">
      <table className="table_table">
        <TableHeader headers={headers} />
        <TableBody rows={rows} rowClass={rowClass} />
      </table>
    </div>
  );
};

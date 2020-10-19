import React from "react";

const Table = ({ items }) => {
  return (
    <table className="table">
      <tr>
        <th className="table__col-1">r030</th>
        <th>txt</th>
        <th>rate</th>
        <th>cc</th>
        <th>exchangedate</th>
      </tr>
      {items.map(({ r030, txt, rate, cc, exchangedate }) => {
        return (
          <tr>
            <td className="table__col-1">{r030}</td>
            <td>{txt}</td>
            <td>{rate}</td>
            <td>{cc}</td>
            <td>{exchangedate}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;

import React from "react";

export default () => {
  let months = [];
  props.map((data) =>
    months.push(
      <td
        key={data}
        className="calendar-day"
        onClick={(e) => setMonth(e.target.innerText)}
      >
        <span>{data}</span>
      </td>
    )
  );
  let rows = [];
  let cells = [];

  months.forEach((row, i) => {
    if (i % 6 !== 0 || i === 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });
  rows.push(cells);
  let monthlist = rows.map((d, i) => {
    return <tr key={d + i}>{d}</tr>;
  });

  return (
    <table className="calendar categories">
      <thead className="year-options">
        <tr>
          <th colSpan="7" className="subheading">
            Select a Month
          </th>
        </tr>
      </thead>
      <tbody>{monthlist}</tbody>
    </table>
  );
};

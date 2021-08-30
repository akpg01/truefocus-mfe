import React from "react";
import moment from "moment";

export default ({ props, dateObj, setYear }) => {
  const getDates = (startDate, stopDate) => {
    let dateArray = [];
    let currentDate = moment(dateObj, "MM-DD-YYYY").set(startDate, "year");
    let endDate = moment(stopDate);

    while (currentDate <= endDate) {
      dateArray.push(moment(currentDate, "MM-DD-YYYY").format("YYYY"));
      currentDate = moment(currentDate, "MM-DD-YYYY").add(1, "year");
    }
    return dateArray;
  };

  let years = [];
  let nextten = moment(dateObj, "MM-DD-YYYY")
    .set(props, "year")
    .add(14, "year")
    .format("Y");
  let tenyear = getDates(props, nextten);

  tenyear.map((data) => {
    return years.push(
      <td className="calendar-day" key={data} onClick={() => setYear(data)}>
        <span>{data}</span>
      </td>
    );
  });

  let rows = [];
  let cells = [];
  years.forEach((row, i) => {
    if (i % 7 !== 0 || i === 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });
  rows.push(cells);
  let yearlist = rows.map((d, i) => <tr key={d + i}>{d}</tr>);
  return (
    <table className="calendar categories">
      <thead className="year-options">
        <tr>
          <th colSpan="7" className="subheading">
            Select a Year
          </th>
        </tr>
      </thead>
      <tbody>{yearlist}</tbody>
    </table>
  );
};

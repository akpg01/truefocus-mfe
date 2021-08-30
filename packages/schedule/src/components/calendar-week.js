import React, { useState } from "react";
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Library creation
library.add(fas, fab);

export default ({
  date,
  monthViewHandler,
  weekViewHandler,
  dayViewHandler,
  changeDate,
}) => {
  const [dateObj, setDateObj] = useState(moment(new Date(date)));
  const [expand, setExpand] = useState("Sunday");
  const matches = localStorage.getItem("matches");

  const onPrev = () => {
    let dateObject = Object.assign({}, dateObj);
    dateObject = moment(dateObject).subtract(1, "week");
    setDateObj(dateObject);
    changeDate("dec", "day", dateObj);
  };

  const onNext = () => {
    let dateObject = Object.assign({}, dateObj);
    dateObject = moment(dateObject).add(1, "week");
    setDateObj(dateObject);
    changeDate("inc", "day", dateObj);
  };

  let start = moment(dateObj).startOf("week");
  let end = moment(dateObj).endOf("week");

  const panelClick = (e) => {
    setExpand(e.target.dataset.day);
  };

  const addEventsForDay = (date) => {
    return JSON.parse(matches).map((e) =>
      e.weekly.map(
        (el, i) =>
          moment(el.day).format("l") === moment(date).format("l") && (
            <>
              {el.hours > 0 && (
                <li key={el.day + i}>
                  <div className="event-desc-wk">
                    <span className="proj-title">{el.title}</span>
                    {" : "}
                    <span className="time">
                      {el.hours}
                      {" hour(s)"}
                    </span>
                  </div>
                </li>
              )}
            </>
          )
      )
    );
  };

  const createDays = () => {
    let data = [];

    while (start <= end) {
      data.push(
        <tr
          className="calendar-row wkhd"
          key={start + Math.random()}
          onClick={(e) => panelClick(e)}
        >
          <td
            className={`calendar-day-head-wk ${
              start.format("dddd").toString() === expand.toString()
                ? "current"
                : ""
            }`}
            colSpan="7"
            data-day={start.format("dddd")}
          >
            {start.format("dddd")}, {start.format("l")}
          </td>
        </tr>
      );
      data.push(
        <tr
          className="calendar-row wkrow"
          key={start + Math.random()}
          style={{
            display:
              expand.toString() === start.format("dddd") ? "block" : "none",
          }}
        >
          <td className="calendar-day wkday" colSpan="7">
            <div className="day-number date" hidden>
              {start.format("YYYY-MM-DD")}
            </div>
            <ul className="weekly-day event-list" key={start * Math.random()}>
              {addEventsForDay(start)}
            </ul>
            <p></p>
            <p></p>
          </td>
        </tr>
      );
      start.add(1, "days");
    }
    return data;
  };
  return (
    <>
      <table
        cellPadding="0"
        cellSpacing="0"
        className="calendar weekly wkdisplay"
      >
        <thead>
          <tr>
            <th>
              <div className="head">
                <div className="date-line">
                  <span className="arrows">
                    <FontAwesomeIcon
                      icon={["fas", "chevron-circle-left"]}
                      className={`chevroncircleleft`}
                      aria-hidden="true"
                      onClick={() => onPrev()}
                    />
                  </span>
                  <h4 colSpan="7">
                    {start.format("l")} &#8212; {end.format("l")}
                  </h4>
                  <span className="arrows">
                    <FontAwesomeIcon
                      icon={["fas", "chevron-circle-right"]}
                      className={`chevroncircleleft`}
                      aria-hidden="true"
                      onClick={() => onNext()}
                    />
                  </span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="calendar-link">
            <th className="nav-links" colSpan="7">
              <ul className="navig2">
                <li id="button-month">
                  <div onClick={monthViewHandler}>Month</div>
                </li>
                <li>
                  <div onClick={weekViewHandler}>Week</div>
                </li>
                <li>
                  <div onClick={dayViewHandler}>Day</div>
                </li>
              </ul>
            </th>
          </tr>
          {createDays()}
        </tbody>
      </table>
    </>
  );
};

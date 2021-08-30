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
  const [dateObj, setDateObj] = useState(moment(new Date(date), "MM-DD-YYYY"));
  const matches = localStorage.getItem("matches");

  const onPrev = () => {
    let dateObject = Object.assign({}, dateObj);
    dateObject = moment(dateObject).subtract(1, "day");
    setDateObj(dateObject);
    changeDate("dec", "day", dateObj);
  };

  const onNext = () => {
    let dateObject = Object.assign({}, dateObj);
    dateObject = moment(dateObject).add(1, "day");
    setDateObj(dateObject);
    changeDate("inc", "day", dateObj);
  };

  const addEventsForDay = () => {
    return JSON.parse(matches).map((e) =>
      e.weekly.map(
        (el, i) =>
          moment(new Date(el.day), "MM-DD-YYYY").format("l") ===
            dateObj.format("l") && (
            <>
              {el.hours > 0 && (
                <li key={el.day + i}>
                  <div className="event">
                    <div className="event-desc-wk">
                      <span className="proj-title">{el.title}</span>
                      {" : "}
                      <span className="time">
                        {el.hours}
                        {" hour(s)"}
                      </span>
                    </div>
                  </div>
                </li>
              )}
            </>
          )
      )
    );
  };

  return (
    <table cellPadding="0" cellSpacing="0" className="calendar weekly">
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
                </span>{" "}
                <h4 colSpan="7">{dateObj.format("l")}</h4>
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
        <tr className="calendar-row">
          <td className="calendar-day-head">
            {dateObj.format("dddd")}, {dateObj.format("l")}
          </td>
        </tr>
        <tr className="calendar-row day">
          <td className="calendar-day">
            <div className="day-number date" hidden>
              {dateObj.format("YYYY-MM-DD")}
            </div>
            <ul
              key={`weekly-day-${Math.random() * 3}`}
              className="weekly-day event-list"
            >
              {addEventsForDay()}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

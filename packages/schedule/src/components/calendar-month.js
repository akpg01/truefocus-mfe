import React, { useEffect, useState } from "react";
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Library creation
library.add(fas, fab);

import YearTable from "./calendar-pickers/year-table";
import MonthTable from "./calendar-pickers/month-table";

// Generate random colors representing event in the calendar
const generateRandomColors = () => {
  const colorArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const color =
    "#" +
    colorArray[parseInt(Math.random() * 16)] +
    colorArray[parseInt(Math.random() * 16)] +
    colorArray[parseInt(Math.random() * 16)] +
    colorArray[parseInt(Math.random() * 16)] +
    colorArray[parseInt(Math.random() * 16)] +
    colorArray[parseInt(Math.random() * 16)];

  return color;
};

export default ({
  date,
  changeDate,
  monthViewHandler,
  weekViewHandler,
  dayViewHandler,
}) => {
  const project = [];
  const [dateObj, setDateObj] = useState(moment());
  const [allmonths, setAllomonths] = useState([]);
  const [showMonthTable, setShowMonthTable] = useState(false);
  const [showYearTable, setShowYearTable] = useState(false);
  const [showDayTable, setShowDayTable] = useState(true);
  const [daysinmonth, setdaysinmonth] = useState([]);

  const weekdays = moment.weekdays();

  useEffect(() => {
    setAllomonths(moment.months());
  }, [date]);

  const daysInMonth = () => dateObj.daysInMonth();
  const year = () => dateObj.format("YYYY");
  const currentDay = () => dateObj.format("D");

  const firstDayOfMonth = () => {
    let dateObject = dateObj;
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  const month = () => dateObj.format("MMMM");

  const showMonth = () => {
    if (!showYearTable) {
      setShowMonthTable(!showMonthTable);
      setShowDayTable(!showDayTable);
    }
  };

  const showTableYear = () => {
    if (!showMonthTable) {
      setShowYearTable(!showYearTable);
      setShowDayTable(!showDayTable);
    }
  };

  const onPrev = () => {
    if (showYearTable) {
      let dateObject = Object.assign({}, dateObj);
      dateObject = moment(dateObject).subtract(1, "year");
      setDateObj(dateObject);
      changeDate("dec", "year", dateObj);
    } else if (showDayTable) {
      let dateObject = Object.assign({}, dateObj);
      dateObject = moment(dateObject).subtract(1, "month");
      setDateObj(dateObject);
      changeDate("dec", "month", dateObj);
    }
  };

  const onNext = () => {
    if (showYearTable) {
      let dateObject = Object.assign({}, dateObj);
      dateObject = moment(dateObject).add(1, "year");
      setDateObj(dateObject);
      changeDate("inc", "year", dateObj);
    } else if (showDayTable) {
      let dateObject = Object.assign({}, dateObj);
      dateObject = moment(dateObject).add(1, "month");
      setDateObj(dateObject);
      changeDate("inc", "month", dateObj);
    }
  };

  const setMonth = (month) => {
    let monthNo = allmonths.indexOf(month);
    let dateObject = Object.assign({}, dateObj);
    dateObject = moment(dateObject).set("month", monthNo);
    setDateObj(dateObject);
    setShowMonthTable(!showMonthTable);
    setShowDayTable(!showDayTable);
  };

  const setYear = (year) => {
    let dateObject = Object.assign({}, dateObj);
    dateObject = moment(dateObject).set("year", year);
    setDateObj(dateObject);
    setShowMonthTable(!showMonthTable);
    setShowYearTable(!showYearTable);
  };

  const onDayClick = (d) => {
    const selectedDate = `${dateObj.format("YYYY")}-${dateObj.format(
      "MM"
    )}-${d}`;
    changeDate("selected", "day", moment(selectedDate));
    dayViewHandler();
  };

  const createBlanks = () => {
    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(
        <td key={"running_day" + i} className="calendar-day-np day other-month">
          {" "}
        </td>
      );
    }
    return blanks;
  };

  const daysOfTheMonth = () => {
    let daysMonth = [];
    for (let d = 1; d <= daysInMonth(); d++) {
      let current =
        d === currentDay() && dateObj.format("M") === moment().format("M")
          ? "today"
          : "";
      daysMonth.push(
        <td
          key={d * Math.random()}
          className={`calendar-day day first-div ${current}`}
          onClick={() => onDayClick(d)}
        >
          <div className="day-number date">{d}</div>
          <ul className="weekly-day event-list">{getEventForDay(d)}</ul>
        </td>
      );
    }
    return daysMonth;
  };

  const getEventForDay = (num) => {
    let date = "" + dateObj.format("M") + "/" + num + "/" + year();
    let startdte = moment(new Date(date)).startOf("month").format("L");
    let enddte = moment(new Date(date)).endOf("month").format("L");

    let matches = [];
    project.map((e) =>
      e.schedules.map((el) => {
        if (
          moment(new Date(el.start)).isBetween(startdte, enddte, "days", "[]")
        ) {
          el.color = generateRandomColors();
          matches.push(el);
        }
      })
    );
    // set matches to local storage to avoid another query on other pages
    localStorage.setItem("matches", JSON.stringify(matches));
    return matches.map((e, i) => {
      return e.weekly.map(
        (d) =>
          moment(new Date(d.day)).format("L") === moment(date).format("L") && (
            <li key={`event-${d.day}`}>
              <div className="event">
                {d.hours > 0 && (
                  <div
                    className="event-desc"
                    style={
                      i < matches.length
                        ? { backgroundColor: e.color }
                        : { backgroundColor: "transparent" }
                    }
                  ></div>
                )}
              </div>
            </li>
          )
      );
    });
  };
  useEffect(() => {
    let totalSlots = [...createBlanks(), ...daysOfTheMonth()];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr key={d + i * i}>{d}</tr>;
    });

    setdaysinmonth(daysinmonth);
  }, [date, dateObj]);
  return (
    <div className="content">
      <div className="table-container">
        <div className="thead">
          <div className="date-line">
            <div className="date-container-text">
              <span className="arrows">
                <FontAwesomeIcon
                  icon={["fas", "chevron-circle-left"]}
                  className={`chevroncircleleft`}
                  aria-hidden="true"
                  onClick={() => onPrev()}
                />
              </span>
              <div className="date-container-date-section">
                {!showMonthTable && (
                  <div className="date-month" onClick={(e) => showMonth(e)}>
                    {month()}
                  </div>
                )}{" "}
                <div className="date-year" onClick={(e) => showTableYear(e)}>
                  {year()}
                </div>
              </div>
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
        </div>
        {showYearTable && (
          <YearTable props={year()} setYear={setYear} dateObj={dateObj} />
        )}
        {showMonthTable && (
          <MonthTable props={moment.months()} setMonth={setMonth} />
        )}
        {showDayTable && (
          <table>
            <thead>
              <tr className="calendar-link">
                <th className="nav-links" colSpan="7">
                  <ul className="navig2">
                    <li id="button-month">
                      <div onClick={monthViewHandler}>Month</div>
                    </li>
                    <li id="button-week">
                      <div onClick={weekViewHandler}>Week</div>
                    </li>
                    <li id="button-month">
                      <div onClick={dayViewHandler}>Day</div>
                    </li>
                  </ul>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="calendar-row weekdays">
                {weekdays.map((day, i) => (
                  <td key={day + i} className="calendar-day-head">
                    {day}
                  </td>
                ))}
              </tr>
              {daysinmonth}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

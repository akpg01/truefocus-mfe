import React, { useState } from "react";
import moment from "moment";

import Month from "./calendar-month";
import Day from "./calendar-day";
import Week from "./calendar-week";

export default ({ history }) => {
  const [date, setDate] = useState(moment());
  const [showMonth, setShowMonth] = useState(true);
  const [showWeek, setShowWeek] = useState(false);
  const [showDay, setShowDay] = useState(false);

  const changeDateHandler = (dir = "", cal = "", dte = null) => {
    if (dir === "inc") {
      setDate(moment(dte).add(1, cal));
    } else if (dir === "dec") {
      setDate(moment(dte).subtract(1, cal));
    } else if (dir === "selected") {
      setDate(moment(dte));
    }
  };

  const monthViewHandler = () => {
    setShowMonth(true);
    setShowWeek(false);
    setShowDay(false);
  };

  const dayViewHandler = () => {
    setShowMonth(false);
    setShowWeek(false);
    setShowDay(true);
  };

  const weekViewHandler = () => {
    setShowMonth(false);
    setShowWeek(true);
    setShowDay(false);
  };
  return (
    <div className="content">
      {showMonth && (
        <Month
          date={date}
          changeDate={changeDateHandler}
          monthViewHandler={monthViewHandler}
          dayViewHandler={dayViewHandler}
          weekViewHandler={weekViewHandler}
        />
      )}
      {showWeek && (
        <Week
          date={date}
          changeDate={changeDateHandler}
          monthViewHandler={monthViewHandler}
          dayViewHandler={dayViewHandler}
          weekViewHandler={weekViewHandler}
        />
      )}
      {showDay && (
        <Day
          date={date}
          changeDate={changeDateHandler}
          monthViewHandler={monthViewHandler}
          dayViewHandler={dayViewHandler}
          weekViewHandler={weekViewHandler}
        />
      )}
    </div>
  );
};

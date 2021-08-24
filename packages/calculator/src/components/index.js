import React from "react";

import Tooltip from "./Tooltip";

export default () => {
  return (
    <>
      <div className="content">
        <form id="calculatorForm" className="calculatorForm">
          <div id="question">
            <h2>How much time do you really have available?</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Activities</th>
                <th>Hours/Day</th>
                <th>Days/Week</th>
                <th>Hours/Week</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="description-tooltip">
                    Average hours you sleep in a 24 hour period
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    name="hours_sleep"
                    min="0"
                    step=".25"
                    max="168"
                  />
                </td>
                <td>
                  <input type="number" name="weekly_sleep" readOnly />
                </td>
                <td>
                  <input type="number" name="total_sleep" readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="description-tooltip">
                    Average hours a day engaged in grooming activities
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    name="hours_groom"
                    min="0"
                    step=".25"
                    max="168"
                  />
                </td>
                <td>
                  <input type="number" name="weekly_groom" readOnly />
                </td>
                <td>
                  <input type="number" name="total_groom" readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="description-tooltip">
                    Average hours a day spent on meals{" "}
                    <Tooltip
                      message={
                        "Be sure to include time to get from one class to another in the time commitment."
                      }
                      position={"top"}
                    >
                      *
                    </Tooltip>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    name="hours_meals"
                    min="0"
                    step=".25"
                    max="168"
                  />
                </td>
                <td>
                  <input type="number" name="weekly_meals" readOnly />
                </td>
                <td>
                  <input type="number" name="total_meals" readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="description-tooltip">
                    Average hours spent doing errands
                    <Tooltip
                      message={
                        "Examples: buying groceries, doing your laundry, etc."
                      }
                      position={"top"}
                    >
                      *
                    </Tooltip>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    name="hours_errands"
                    min="0"
                    step=".25"
                    max="168"
                  />
                </td>
                <td>
                  <input type="number" name="weekly_errands" readOnly />
                </td>
                <td>
                  <input type="number" name="total_errands" readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="description-tooltip">
                    <div className="desciption-tooltip-extra">
                      <p>Average hours spent commuting per day</p>
                      <p>and number of days you commute</p>
                    </div>
                    <Tooltip
                      message={
                        "Includes time spent walking from bus stop or parking lot to your destinations."
                      }
                      position={"top"}
                    >
                      *
                    </Tooltip>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    name="hours_commute"
                    min="0"
                    step=".25"
                    max="168"
                  />
                </td>
                <td>
                  <input type="number" name="weekly_commute" min="0" max="7" />
                </td>
                <td>
                  <input type="number" name="total_commute" readOnly />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="description-tooltip">
                    <div className="description-tooltip-extra">
                      <p>Average hours spent each week</p>
                      <p>doing exracurricular activities</p>
                    </div>
                    <Tooltip
                      message={
                        "Examples: participating in a student organization, playing organized sports, attending church"
                      }
                      position={"top"}
                    >
                      *
                    </Tooltip>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    max="168"
                    step=".25"
                    name="hours_extracurricular"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="description-tooltip">
                    <div className="description-tooltip-extra">
                      <p>Average hours each week spent</p>
                      <p>on leisure activities</p>
                    </div>{" "}
                    <Tooltip
                      message={
                        "Examples: Going out with friends, watching TV, reading for pleasure, working out, or going to parties. Don't underestimate this one!"
                      }
                      position={"top"}
                    >
                      *
                    </Tooltip>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    step=".25"
                    max="168"
                    name="hours_leisure"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="description-tooltip">
                    Average hours each week working at a job
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    max="168"
                    step=".25"
                    name="hours_job"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="description-tooltip">
                    <div className="description-tooltip-extra">
                      <p>Hours spent or plan to spend</p>
                      <p>in class each week</p>
                    </div>
                    <Tooltip
                      message={
                        "Be sure to include time to get from one class to another in the time commitment."
                      }
                      position={"top"}
                    >
                      *
                    </Tooltip>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    name="hours_class"
                    min="0"
                    max="168"
                    step=".25"
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <th colSpan="4" className="results">
                  Results from the above data
                </th>
              </tr>
              <tr>
                <td colSpan="3">
                  Total number of hours spent each week engaged in daily living
                  and school activities
                </td>
                <td>
                  <input type="number" name="hours_living" readOnly />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="description-tooltip">
                    Hours available for projects per week{" "}
                    <Tooltip
                      message={"Assuming 168 hours in a week"}
                      position={"top"}
                    >
                      *
                    </Tooltip>
                  </div>
                </td>
                <td>
                  <input type="number" name="hours_project" readOnly />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="description-tooltip">
                    Balance{" "}
                    <Tooltip
                      message={
                        "For every hour spent in class, expect to spend a minimum of 2 hours of out-of-class study time. If this value is negative, please make some adjustments in your time commitments and recalculate."
                      }
                      position={"top"}
                    >
                      *
                    </Tooltip>
                  </div>
                </td>
                <td>
                  <input type="number" name="hours_total" readOnly />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

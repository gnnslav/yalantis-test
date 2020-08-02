import React from "react";

import {MONTHS} from '../../untils/monthsString';

import "./month.scss";

const Months = props => {
  const { numberOfBirthday, usersByMonthOfBirsday, reckObj } = props;

  const getClass = current => {
    const style =
      current <= 2
        ? "background-grey"
        : current <= 6 && current >= 3
        ? "background-blue"
        : current <= 10 && current >= 7
        ? "background-green"
        : "background-red";
    return style;
  };

  const bgColor = ind => {
    const obj = Object.values(numberOfBirthday).reduce((acc, item, index) => {
      const bgCol = getClass(item);
      acc[index] = bgCol;
      return acc;
    }, []);
    return obj[ind];
  };

  const showTooltip = index => {
    usersByMonthOfBirsday(index);
  };

  const getElement = e => {
    const target = e.target;
    const reck = target.getBoundingClientRect();
    reckObj({
      left: reck.left,
      top: reck.top,
      width: reck.width
    });
  };

  const closeTooltip = () => {
    usersByMonthOfBirsday(null);
  };

  return (
    <div>
      <div className="month-title"> Months </div>
      <ul className="months-list">
        {MONTHS.map((month, index) => {
          return (
            <li
              className={"month-item " + bgColor(index)}
              key={index}
              onMouseOver={e => {
                showTooltip(index);
                getElement(e);
              }}
              onMouseOut={() => closeTooltip()}
            >
              {month}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Months;

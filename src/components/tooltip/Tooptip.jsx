import React from "react";

import "./tooltip.scss";

const Tooltip = props => {
  const tooltipPosition = () => {
    const { left, top, width } = props.reckTooltip;
    const positionLeft = left + width + 20;
    const styleForShow = { left: `${positionLeft}px`, top: `${top}px` };
    const styleForClose = { left: "0", top: "0" };
    const style = positionLeft !== 0 ? styleForShow : styleForClose;
    return style;
  };

  return (
    <ul className="tooltips-box" style={tooltipPosition()}>
      {Object.values(props.filteredUsers).map(user => {
        const name = `${user.firstName}  ${user.lastName}`;
        return (
          <li className="tooltips-item" key={user.id}>
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default Tooltip;

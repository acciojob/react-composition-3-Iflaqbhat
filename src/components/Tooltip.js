import React, { useState } from "react"; // Make sure useState is imported
import "./../styles/Tooltip.css";

const Tooltip = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {props.children}
      {showTooltip && <div className="tooltiptext">{props.text}</div>}
    </div>
  );
};

export default Tooltip;

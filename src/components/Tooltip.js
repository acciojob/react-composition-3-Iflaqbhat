import React, { useState } from "react"; // Make sure useState is imported
import "./../styles/Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;

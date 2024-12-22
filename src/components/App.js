import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip"; // Make sure Tooltip is imported

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip.">
        <button>Hover over me</button>
      </Tooltip>
      <br />
      <br />
      <Tooltip text="This is a different tooltip.">
        <button>Hover over me to see another tooltip</button>
      </Tooltip>
    </div>
  );
};

export default App;

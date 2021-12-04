import React from "react";

const AppText = ({ title, hours, minutes, seconds }) => (
  <div>
    <span>
      <span style={{ fontWeight: 600 }}>{title}:</span>{" "}
      <span style={{ fontWeight: 500 }}>
        {hours > 0 ? `${hours} hours` : ""} {minutes} minutes{" "}
        {seconds > 0 ? `${seconds} seconds` : ""}
      </span>
    </span>
  </div>
);

export default AppText;

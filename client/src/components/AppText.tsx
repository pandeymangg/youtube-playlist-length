import React from "react";

interface IProps {
  title: string;
  hours: number;
  minutes: number;
  seconds: number;
}

const AppText: React.FC<IProps> = ({ title, hours, minutes, seconds }) => (
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

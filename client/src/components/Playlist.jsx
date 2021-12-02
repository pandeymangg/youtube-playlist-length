import React from "react";
import { calculateDuration } from "../utils/calculateDuration";

function PlayList({ response }) {
  const { duration, hours, minutes, seconds, title, numberOfVideos } = response;

  const [hours1, minutes1, seconds1] = calculateDuration({
    duration,
    speed: 1.25,
  });
  const [hours2, minutes2, seconds2] = calculateDuration({
    duration,
    speed: 1.5,
  });
  const [hours3, minutes3, seconds3] = calculateDuration({
    duration,
    speed: 1.75,
  });
  const [hours4, minutes4, seconds4] = calculateDuration({
    duration,
    speed: 2,
  });

  return (
    <div className="col s12 m7 container">
      <div className="card horizontal">
        <div style={{ marginLeft: "2%" }} className="card-stacked">
          <div className="card-content">
            <h6 style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <span style={{ fontWeight: "bold" }}>Title</span>: {title}
            </h6>

            <h6 style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <span style={{ fontWeight: "bold" }}>Number of videos</span>:{" "}
              {numberOfVideos}
            </h6>

            <h6 style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <span style={{ fontWeight: "bold" }}>Total duration</span>:{" "}
              {hours > 0 ? `${hours} hours` : ""} {minutes} minutes{" "}
              {seconds > 0 ? `${seconds} seconds` : ""}
            </h6>

            <h6 style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <span style={{ fontWeight: "bold" }}>At 1.25x</span>:{" "}
              {hours1 ? `${hours1} hours` : ""} {minutes1} mintues {seconds1}{" "}
              seconds
            </h6>

            <h6 style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <span style={{ fontWeight: "bold" }}>At 1.50x</span>:{" "}
              {hours2 ? `${hours2} hours` : ""} {minutes2} minutes {seconds2}{" "}
              seconds
            </h6>

            <h6 style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <span style={{ fontWeight: "bold" }}>At 1.75x</span>:{" "}
              {hours3 ? `${hours3} hours` : ""} {minutes3} minutes {seconds3}{" "}
              seconds
            </h6>

            <h6 style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <span style={{ fontWeight: "bold" }}>At 2x</span>:{" "}
              {hours4 ? `${hours4} hours` : ""} {minutes4} minutes {seconds4}{" "}
              seconds
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayList;

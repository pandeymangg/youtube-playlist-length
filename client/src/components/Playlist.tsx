import React from "react";
import styled from "styled-components";
import { calculateDuration } from "../utils/calculateDuration";
import AppText from "./AppText";
import { useAppContext } from "../context/app";
import { IState } from "../pages/calculate";

const PlayList: React.FC<IState> = ({ response }) => {
  const { duration, hours, minutes, seconds, title, numberOfVideos } = response;

  const { theme } = useAppContext();

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
    <Container theme={theme}>
      <div className="playlist__container">
        <div className="playlist__details__container">
          <div>
            <span style={{ fontWeight: 600 }}>Title</span>:{" "}
            <span style={{ fontWeight: 500 }}>{title}</span>
          </div>

          <div>
            <span style={{ fontWeight: 600 }}>Number of videos</span>:{" "}
            <span style={{ fontWeight: 500 }}>{numberOfVideos}</span>
          </div>

          <AppText
            title="Total Duration"
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />

          <AppText
            title="At 1.25x speed"
            hours={hours1}
            minutes={minutes1}
            seconds={seconds1}
          />
          <AppText
            title="At 1.5x speed"
            hours={hours2}
            minutes={minutes2}
            seconds={seconds2}
          />
          <AppText
            title="At 1.75x speed"
            hours={hours3}
            minutes={minutes3}
            seconds={seconds3}
          />
          <AppText
            title="At 2x speed"
            hours={hours4}
            minutes={minutes4}
            seconds={seconds4}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  z-index: 50;

  & .playlist__container {
    width: 95%;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
    box-shadow: 4px 4px 1px
      ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};

    & .playlist__details__container {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      font-size: 1rem;

      @media (max-width: 640px) {
        padding: 0.5rem;
        font-size: 0.8rem;
      }
    }
  }
`;

export default PlayList;

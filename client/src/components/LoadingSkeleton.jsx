import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { useAppContext } from "../context/app";

function LoadingSkeleton() {
  const { theme } = useAppContext();

  return (
    <Container>
      <div className="skeleton__container">
        <Skeleton
          height={200}
          baseColor={theme === "light" && "#ebebeb"}
          highlightColor={theme === "light" && "#f5f5f5"}
        />
      </div>
    </Container>
  );
}

const Container = styled.section`
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  z-index: 50;

  & .skeleton__container {
    width: 95%;
  }
`;

export default LoadingSkeleton;

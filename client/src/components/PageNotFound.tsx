import styled from "styled-components";

const PageNotFound = () => {
  return (
    <Container>
      <h1>404 | Page not found</h1>
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PageNotFound;

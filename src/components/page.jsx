import RatingComponent from "./rating-component";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Page = () => {
  return (
    <MainDiv>
      <RatingComponent />
    </MainDiv>
  );
};

export default Page;

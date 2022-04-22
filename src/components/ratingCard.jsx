// import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ButtonGroup from "./buttonGroup";
import SvgStar from "./SvgStarComponent";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background: linear-gradient(hsl(213, 19%, 18%), hsl(216, 12%, 8%));
  width: 360px;
  margin: 50px 0px;
  padding: 20px;
`;
const Title = styled.h2`
  color: white;
`;
const Text = styled.p`
  font-size: 15px;
  color: hsl(216, 12%, 54%);
`;

const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SubmitButton = styled.button`
  color: white;
  border-style: none;
  margin: 25px 0px;
  background-color: hsl(25, 97%, 53%);
  height: 40px;
  width: 100%;
  border-radius: 18px;
  :hover {
    transition: 0.25s;
    color: hsl(25, 97%, 53%);
    background-color: white;
  }
`;

const RatingCard = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("SUBMITTED");
    navigate("/thank_you");
  };

  return (
    <>
      <MainDiv>
        <Container>
          <SvgStar />
          <Title>How did we do?</Title>
          <Text>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Text>
          <ButtonGroup buttons={["1", "2", "3", "4", "5"]} />
          <SubmitDiv>
            <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
          </SubmitDiv>
        </Container>
      </MainDiv>
    </>
  );
};

export default RatingCard;

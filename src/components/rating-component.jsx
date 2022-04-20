import { useState } from "react";
import styled from "styled-components";

import ButtonGroup from "./buttonGroup";

const Container = styled.div`
  background: linear-gradient(hsl(213, 19%, 18%), hsl(216, 12%, 8%));
  border: 1px solid red;
  width: 360px;
  margin: 50px 0px;
  padding: 20px;
`;
const Title = styled.h2`
  color: white;
`;
const Text = styled.p`
  font-size: 15px;
  color: white;
`;
const NumBtnsDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const NumBtn = styled.button`
  color: hsl(0, 0%, 100%);
  background-color: hsl(213, 19%, 18%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border-style: none;

  :hover {
    transition:0.25s;
    background-color: hsl(25, 97%, 53%);
  }
`;
const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SubmitButton = styled.button`
  color: white;
  border-style: none;
  margin: 25px;
  background-color: hsl(25, 97%, 53%);
  height: 40px;
  width: 90%;
  border-radius: 18px;
  :hover{
    transition:0.25s;
    color: hsl(25, 97%, 53%);
    background-color:white;
  }
`;

const RatingComponent = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);

  const clickBtn1 = () => {
    setBtn1(true);
    setBtn2(false)
    setBtn3(false)
    setBtn4(false)
    setBtn5(false)
  };
  const clickBtn2 = () => {
    setBtn1(false);
    setBtn2(true)
    setBtn3(false)
    setBtn4(false)
    setBtn5(false)
  };
  const clickBtn3 = () => {
    setBtn1(false);
    setBtn2(false)
    setBtn3(true)
    setBtn4(false)
    setBtn5(false)
  };
  const clickBtn4 = () => {
    setBtn1(false);
    setBtn2(false)
    setBtn3(false)
    setBtn4(true)
    setBtn5(false)
  };
  const clickBtn5 = () => {
    setBtn1(false);
    setBtn2(false)
    setBtn3(false)
    setBtn4(false)
    setBtn5(true)
  };

  const handleSubmit = () => {};
  return (
    <>
      <Container>
        <Title>How did we do?</Title>
        <Text>
          Please let is know how we did with your support request. All feedback
          is appreciated to help us improve our affering!
        </Text>
        <ButtonGroup />
        <SubmitDiv>
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </SubmitDiv>
      </Container>
    </>
  );
};

export default RatingComponent;

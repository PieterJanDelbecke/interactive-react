import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color:grey;
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
  border-style: solid;

  :hover{
    background-color: hsl(25, 97%, 53%);
  }
`;
const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SubmitButton = styled.button`
  margin: 10px;
  background-color: red;
`;

const RatingComponent = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);

  const clickBtn1 = () => {
    const stateBtn = btn1 === true ? false : true;
    console.log("Btn1: ", stateBtn);
    setBtn1(stateBtn);
  };
  const clickBtn2 = () => {
    const stateBtn = btn2 === true ? false : true;
    console.log("Btn2: ", stateBtn);
    setBtn2(stateBtn);
  };
  const clickBtn3 = () => {
    const stateBtn = btn3 === true ? false : true;
    console.log("Btn3: ", stateBtn);
    setBtn3(stateBtn);
  };
  const clickBtn4 = () => {
    const stateBtn = btn4 === true ? false : true;
    console.log("Btn4: ", stateBtn);
    setBtn4(stateBtn);
  };
  const clickBtn5 = () => {
    const stateBtn = btn5 === true ? false : true;
    console.log("Btn5: ", stateBtn);
    setBtn5(stateBtn);
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
        <NumBtnsDiv onSubmit={handleSubmit}>
          <NumBtn onClick={clickBtn1}>1</NumBtn>
          <NumBtn onClick={clickBtn2}>2</NumBtn>
          <NumBtn onClick={clickBtn3}>3</NumBtn>
          <NumBtn onClick={clickBtn4}>4</NumBtn>
          <NumBtn onClick={clickBtn5}>5</NumBtn>
        </NumBtnsDiv>
        <SubmitDiv>
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </SubmitDiv>
      </Container>
    </>
  );
};

export default RatingComponent;

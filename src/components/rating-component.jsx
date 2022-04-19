import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    background-color: grey;
    border: 1px solid red;    
    width: 360px;
    margin: 50px 0px;
`

const RatingComponent = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);

  const clickBtn1 = () => {
    const stateBtn = btn1 === true ? false : true;
    console.log("Btn1: ",stateBtn);
    setBtn1(stateBtn);
  };
  const clickBtn2 = () => {
    const stateBtn = btn2 === true ? false : true;
    console.log("Btn2: ",stateBtn);
    setBtn2(stateBtn);
  };
  const clickBtn3 = () => {
    const stateBtn = btn3 === true ? false : true;
    console.log("Btn3: ",stateBtn);
    setBtn3(stateBtn);
  };
  const clickBtn4 = () => {
    const stateBtn = btn4 === true ? false : true;
    console.log("Btn4: ",stateBtn);
    setBtn4(stateBtn);
  };
  const clickBtn5 = () => {
    const stateBtn = btn5 === true ? false : true;
    console.log("Btn5: ",stateBtn);
    setBtn5(stateBtn);
  };

  const handleSubmit = ()=> {

  }
  return (
    <>
    <Container>
      <h1>How did we do?</h1>
      <p>
        Please let is know how we did with your support request. All feedback is
        appreciated to help us improve our affering!
      </p>
      <div onSubmit={handleSubmit}>
        <button onClick={clickBtn1}>1</button>
        <button onClick={clickBtn2}>2</button>
        <button onClick={clickBtn3}>3</button>
        <button onClick={clickBtn4}>4</button>
        <button onClick={clickBtn5}>5</button>
      </div>
      <button type="submit">SUBMIT</button>
    </Container>
    </>
  );
};

export default RatingComponent;

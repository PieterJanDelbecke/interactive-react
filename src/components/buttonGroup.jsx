import { useState } from "react";
import styled from "styled-components";

const ButtonGroup = ({ buttons }) => {
  const [clickedId, setClickedId] = useState(-1);

  const NumBtnsDiv = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  const NumBtn = styled.button`
  color: hsl(0, 0%, 100%);
    background-color: ${(props) => (props.background ? "hsl(217, 12%, 63%)" : 'hsl(213, 19%, 18%)')};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border-style: none;

  :hover {
    transition:0.25s;
    background-color: hsl(25, 97%, 53%);
    `;

  return (
    <NumBtnsDiv>
      {buttons.map((buttonLabel, i) => {
        return (
          <NumBtn
            key={i}
            name={buttonLabel}
            onClick={() => setClickedId(i)}
            background={i === clickedId ? true : false}
          >
            {buttonLabel}
          </NumBtn>
        );
      })}
    </NumBtnsDiv>
  );
};

export default ButtonGroup;

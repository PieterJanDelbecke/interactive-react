import { useContext } from "react";
import styled from "styled-components";

import AppContext from "../context/AppContext";

const ButtonGroup = ({ buttons }) => {
  const {context, setContext} =useContext(AppContext)

  const NumBtnsDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const NumBtn = styled.button`
  color: hsl(0, 0%, 100%);
    background-color: ${(props) => (props.active ? "hsl(217, 12%, 63%)" : 'hsl(213, 19%, 18%)')};
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
            onClick={() => setContext({...context, activeBtn: i})}
            active={i === context.activeBtn ? true : false}
          >
            {buttonLabel}
          </NumBtn>
        );
      })}
    </NumBtnsDiv>
  );
};

export default ButtonGroup;

import { useContext } from "react";
import AppContext from "../context/AppContext";
import styled from "styled-components";

// import { useNavigate } from "react-router-dom";
import SvgThanks from "./SvgThanksComponent";

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

const SvgDiv = styled.div`
display: flex;
justify-content: center;
`;

const ScoreText = styled.h5`
  text-align: center;
  color: hsl(25, 97%, 53%);
  background-color: hsl(213, 19%, 18%);
  width: 180px;
  margin: 20px auto;
  padding: 5px 0px;
  border-radius: 20px; ;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
`;
const Text = styled.p`
  font-size: 15px;
  text-align: center;
  color: hsl(216, 12%, 54%);
`;

const ThankYouCard = () => {
  const { context } = useContext(AppContext);
  //   const navigate = useNavigate();

  let score = context.activeBtn + 1;

  //   const handleClick = () => {
  //     navigate("/");
  //   };

  return (
    <MainDiv>
      <Container>
        <SvgDiv>
          <SvgThanks />
        </SvgDiv>
        <ScoreText>You selected {score} out of 5</ScoreText>
        <Title>Thank you!</Title>
        <Text>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </Text>
      </Container>
    </MainDiv>
  );
};

export default ThankYouCard;

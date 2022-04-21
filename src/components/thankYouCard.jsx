import { useContext } from "react";
import AppContext from "../context/AppContext";

import { useNavigate } from "react-router-dom";

const ThankYouCard = () => {
  const { context } = useContext(AppContext);
  const navigate = useNavigate();

  let score = context.activeBtn + 1;

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <p>You selected {score} out of 5</p>
      <h1>Thank you</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      <button onClick={handleClick}>back</button>
    </>
  );
};

export default ThankYouCard;

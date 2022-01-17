import React, { useState } from "react";
import { Button } from "rsuite";
import "../../styles/Feedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Feedback = () => {
  const [disablePositive, setDisablePositive] = useState(false);
  const [disableNegative, setDisableNegative] = useState(false);

  const positiveFeedback = () => {
    setDisableNegative(false);
    setDisablePositive(true);
  };
  const negativeFeedback = () => {
    setDisablePositive(false);
    setDisableNegative(true);
  };

  return (
    <div className="feedback">
      <p className="feedback-text">Qual a sua opinião sobre essa decisão?</p>
      <Button
        className={disablePositive ? "positive-icon active" : "positive-icon "}
        onClick={(event) => positiveFeedback(event)}
      >
        <FontAwesomeIcon icon={faCheckCircle} />
      </Button>
      <Button
        className={disableNegative ? " negative-icon active" : "negative-icon"}
        onClick={(event) => negativeFeedback(event)}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </Button>
    </div>
  );
};

export default Feedback;

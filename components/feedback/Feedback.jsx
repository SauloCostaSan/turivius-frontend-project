import React, { useState } from "react";
import Link from "next/link";
import { Button, FlexboxGrid, List, Panel } from "rsuite";
import "../../styles/Feedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Feedback = () => {
  const [disablePositive, setDisablePositive] = useState(false);
  const [disableNegative, setDisableNegative] = useState(false);

  const positiveFeedback = (event) => {
    setDisablePositive(false);
    setDisableNegative(true);
    event.target.style.color = "#15c16b";
  };
  const negativeFeedback = (event) => {
    setDisableNegative(false);
    setDisablePositive(true);
    // event.preventDefault();
    event.target.style.color = "#e61e25";
  };

  return (
    <div className="feedback">
      <p className="feedback-text">Qual a sua opinião sobre essa decisão?</p>
      <Button
        disabled={disablePositive}
        className="positive-icon"
        onClick={(event) => positiveFeedback(event)}
      >
        <FontAwesomeIcon icon={faCheckCircle} />
      </Button>
      <Button
        disabled={disableNegative}
        className="negative-icon"
        onClick={(event) => negativeFeedback(event)}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </Button>
    </div>
  );
};

export default Feedback;

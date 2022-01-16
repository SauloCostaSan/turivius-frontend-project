import React, { useState } from "react";
import Link from "next/link";
import { Button, FlexboxGrid, List, Panel } from "rsuite";
import "../../styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCopy,
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
const Card = (props) => {
  const { nome, data_pub, data_jul, url, entity, content } = props;
  const [toggle, setToggle] = useState(false);

  const positiveFeedback = (event) => {
    setToggle(!toggle);
    // event.preventDefault();
    event.target.style.color = "#15c16b";
  };
  const negativeFeedback = (event) => {
    setToggle(!toggle);
    // event.preventDefault();
    event.target.style.color = "#e61e25";
  };

  return (
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={18}>
        <Panel className="turivius-card" shaded>
          <div className="card-header">
            <h1 className="title-card">{nome}</h1>
            <div className="feedback">
              <p className="feedback-text">
                Qual a sua opinião sobre essa decisão?
              </p>
              <Button onClick={(event) => positiveFeedback(event)}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </Button>
              <Button onClick={(event) => negativeFeedback(event)}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </Button>
            </div>
          </div>
          <List bordered>
            {content.map((item, index) => (
              <List.Item key={item.id} index={index}>
                <b className="content-title">{item.title}</b>
                <p className="content-text">{item.content}</p>
              </List.Item>
            ))}
          </List>
          <div>
            <div className="info">
              <span>Tribunal: {entity}</span>
              <span>{data_pub}</span>
              <span>{data_jul}</span>
            </div>
            <div className="card-footer">
              <div className="links">
                <Link target={"_blank"} href={url}>
                  <a target="_blank">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>Abrir Inteiro Teor</span>
                  </a>
                </Link>
              </div>
              <div className="links">
                <Link target={"_blank"} href={url}>
                  <a target="_blank">
                    <FontAwesomeIcon icon={faCopy} />
                    <span>Ementa para citação</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Card;

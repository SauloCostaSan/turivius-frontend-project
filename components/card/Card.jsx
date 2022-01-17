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
import { CopyToClipboard } from "react-copy-to-clipboard";
import Feedback from "../feedback/Feedback";

const Card = (props) => {
  const { nome, data_pub, data_jul, url, entity, content } = props;
  const [copied, setCopied] = useState(false);

  const ementa = content.filter((ementa) => ementa.title == "Ementa");

  return (
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={18}>
        <Panel className="turivius-card" shaded>
          <div className="card-header">
            <h1 className="title-card">{nome}</h1>
            <Feedback />
          </div>
          <List bordered>
            {content.map((item, index) => (
              <>
                <List.Item key={index}>
                  <b className="content-title">{item.title}</b>
                  <p className="content-text">{item.content}</p>
                </List.Item>
              </>
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
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="footer-icon"
                    />
                    <span>Abrir Inteiro Teor</span>
                  </a>
                </Link>
              </div>
              <div className="links">
                {ementa.map((item, index) => (
                  <CopyToClipboard
                    key={index}
                    className="btn-copy"
                    text={item.content}
                    onCopy={() => setCopied({ copied: true })}
                  >
                    <button>
                      <FontAwesomeIcon icon={faCopy} className="footer-icon" />
                      <span>Copiar a ementa para citação</span>
                    </button>
                  </CopyToClipboard>
                ))}
                {copied ? (
                  <span className="copy-message">A ementa foi copiada</span>
                ) : null}
              </div>
            </div>
          </div>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Card;

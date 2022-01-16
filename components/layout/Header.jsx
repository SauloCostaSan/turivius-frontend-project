import React from "react";
import { FlexboxGrid, Affix } from "rsuite";
import "../../styles/Header.css";

function TuriviusHeader() {
  return (
    <FlexboxGrid justify="center" className="turivius-header">
      <FlexboxGrid.Item colspan={18}>
        <img src="/logo.png" />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}

export default TuriviusHeader;

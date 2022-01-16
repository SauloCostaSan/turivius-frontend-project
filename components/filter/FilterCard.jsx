import React, { useState } from "react";
import Link from "next/link";
import { Button, FlexboxGrid, Row, Col, Form, DatePicker, Grid } from "rsuite";
import "../../styles/Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const FilterCard = (props) => {
  const { nome, data_pub, data_jul, url, entity, content } = props;

  return (
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={18}>
        <div className="call-to-action">
          <h1 className="filter-title">Pesquisa de Jurisprudência</h1>
          <span className="filter-description">
            Insira uma informação para facilitar a busca
          </span>
        </div>
        <div className="filter-form">
          <Form fluid>
            <Grid fluid>
              <Row gutter={24} className="row-1">
                <Col xs={12}>
                  <Form.Group>
                    <Form.ControlLabel className="form-label">
                      Título
                    </Form.ControlLabel>
                    <Form.Control name="nome" className="form-input" />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group>
                    <Form.ControlLabel className="form-label">
                      Tribunal
                    </Form.ControlLabel>
                    <Form.Control name="nome" className="form-input" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <FlexboxGrid justify="space-between" align="bottom">
                  <Col xs={20}>
                    <FlexboxGrid.Item>
                      <Row gutter={24}>
                        <Col>
                          <Form.Group>
                            <Form.ControlLabel className="form-label">
                              Data de publicação
                            </Form.ControlLabel>
                            <Form.Control
                              name="datePicker"
                              accepter={DatePicker}
                              placeholder="Select Date"
                              className="date-input"
                            />
                          </Form.Group>
                        </Col>
                        {/* </FlexboxGrid.Item>
                    <FlexboxGrid.Item> */}
                        <Col>
                          <Form.Group>
                            <Form.ControlLabel className="form-label">
                              Data de julgamento
                            </Form.ControlLabel>
                            <Form.Control
                              name="datePicker"
                              accepter={DatePicker}
                              placeholder="Select Date"
                              className="date-input"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </FlexboxGrid.Item>
                  </Col>
                  <FlexboxGrid.Item>
                    <Col xs={4}>
                      <Button className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                        Pesquisar
                      </Button>
                    </Col>
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </Row>
            </Grid>
          </Form>
        </div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default FilterCard;

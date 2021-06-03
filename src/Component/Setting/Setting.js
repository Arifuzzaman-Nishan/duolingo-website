import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import AccountList from "../AccountList/AccountList";
import Coach from "../Coach/Coach";
import "./Setting.css";

const toggleData = [
  {
    name: "Sound effects",
  },
  {
    name: "Animation",
  },
  {
    name: "Motivational message",
  },
  {
    name: "Speaking exercise",
  },
  {
    name: "Listening exercise",
  },
];

const textData = [
  {
    name: "maximum image size is 1 MB",
  },
  {
    name: "Disable my account",
  },
  {
    name: "Delete my account",
  },
  {
    name: "Export my data",
  },
  {
    name: "Logout",
  },
];



const Setting = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const handleToggle = () => {
    setToggleButton(!toggleButton);
  };
  console.log(toggleButton);

  const { path, url } = useRouteMatch();

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="d-flex justify-content-between">
              <h3>Account settings</h3>
              {toggleButton ? (
                <Button variant="success">SAVE CHANGES</Button>
              ) : (
                <Button disabled variant="success">
                  SAVE CHANGES
                </Button>
              )}
            </div>

            <form className="mt-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6>Username</h6>
                <input
                  className="form-control w-75 input-border-radius"
                  type="text"
                />
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="">Email</h6>
                <input
                  className="form-control w-75 input-border-radius"
                  type="text"
                />
              </div>
            </form>

            <div className="mt-5">
              {toggleData.map((data) => (
                <div className="d-flex justify-content-between">
                  <h6 htmlFor="">{data.name}</h6>
                  <label className="switch">
                    <input onClick={handleToggle} type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-3">
              <Row>
                <Col md={6}>
                  <h6>Profile Picture</h6>
                </Col>
                <Col md={6}>
                  <input className="mb-3" type="file" />
                  {textData.map((data) => (
                    <h6 className="text-secondary">{data.name}</h6>
                  ))}
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={6}>
            <AccountList/>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Setting;

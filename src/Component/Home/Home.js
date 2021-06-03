import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../NavigationBar/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEgg, faUniversity } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import HomeMain from "../HomeMain/HomeMain";

const cardImg =
  "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/placeholder.svg";

const Home = () => {
  return (
    <div className="mt-5 pt-5">
      <Container className="">
        <Row >
          <Col  md={6}>
            <Card
              className="p-4 m-auto"
              style={{ width: "20rem", borderRadius: "10px" }}
            >
              <Card.Body>
                <Card.Title className="text-center">
                  Choose your path!
                </Card.Title>
                <Card.Text className="text-center">
                  Beginners start at Letters 1.
                  <br />
                  Advanced learners take a short test.
                </Card.Text>
                <div className="d-flex justify-content-around align-items-center">
                  <FontAwesomeIcon className="card-icon egg" icon={faEgg} />
                  <h5>OR</h5>
                  <FontAwesomeIcon
                    className="card-icon varsity"
                    icon={faUniversity}
                  />
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h6>Letters</h6>
                  <h6 className="">Placement Tests</h6>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="m-auto p-4" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={cardImg} />
              <Card.Body>
                <Card.Title>Unlock Leaderboards!</Card.Title>
                <Card.Text>
                  Complete 10 more lessons to start competing
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <HomeMain />
      </Container>
    </div>
  );
};

export default Home;

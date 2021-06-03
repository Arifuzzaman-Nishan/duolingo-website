import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import eggImg from "../../images/circleEgg.png";
import babyImg from "../../images/babyImg.png";
import box from "../../images/box.png";
import bar from "../../images/bar.png";

const HomeMain = () => {
  const fakeEggData = [
    {
      name: "Letters2",
      img: eggImg,
    },
    {
      name: "Letters3",
      img: eggImg,
    },
    {
      name: "Letters4",
      img: eggImg,
    },
    {
      name: "Basic 1",
      img: babyImg,
    },
  ];
  return (
    <div className="mt-5">
      <Row>
        <Col md={6}>
          <div className="">
            {fakeEggData.map((item) => (
              <div className="text-center mb-4">
                <img src={item.img} alt="" />
                <h6>{item.name}</h6>
              </div>
            ))}
          </div>
        </Col>

        <Col md={6}>
          <Card className="m-auto" style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>XP Progress</Card.Title>
              <div className="d-flex">
                <Card.Img className="w-25" src={box} />
                <div>
                  <h6 className='ml-2 text-secondary'>Daily Goal</h6>
                  <div className='d-flex align-items-center'>
                    <img className="ml-2" src={bar} alt="" />
                    <h6 className='ml-2 text-secondary'>0/20 XP</h6>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeMain;

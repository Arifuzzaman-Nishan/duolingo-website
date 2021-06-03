import React, { useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import AccountList from "../AccountList/AccountList";
import bird from "../../images/bird.png";

const coachData = [
  {
    name: "Basic",
    price: "1 XP per day",
    status: "true",
  },
  {
    name: "Casual",
    price: "10 XP per day",
    status: "true",
  },
  {
    name: "Regular",
    price: "20 XP per day",
    status: "true",
  },
  {
    name: "Serious",
    price: "30 XP per day",
    status: "true",
  },
  {
    name: "Intense",
    price: "50 XP per day",
    status: "true",
  },
];

const Coach = () => {
  const [color, setColor] = useState("");
  const [name,setName] = useState('');
  const [button,setButton] = useState(false);

  const handleTable = (data) => {
    setName(data.name);
    setColor('#36B0F4');
  };

  console.log(color);

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col className="" md={8}>
            <div className="d-flex justify-content-between mb-3">
              <h2>Daily Goal setting</h2>
              <button className="btn btn-success">SAVE CHANGES</button>
            </div>
            <article>
              Coach here! Selecting a daily goal will help you stay motivated
              while learning a language. You can change your goal at any time.
            </article>
            <div className="d-md-flex justify-content-between mt-5">
              <img className="img-fluid" src={bird} alt="" />
              <Table
                style={{ width: "25rem", cursor: "pointer" }}
                striped
                bordered
                hover
              >
                <tbody>
                  {coachData.map((data) => (
                    name === data.name?
                    <tr style={{background:`${color}`}} onClick={() => handleTable(data)}>
                      <td>{data.name}</td>
                      <td>{data.price}</td>
                    </tr>
                    :
                    <tr onClick={() => handleTable(data)}>
                      <td>{data.name}</td>
                      <td>{data.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col md={4}>
            <AccountList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Coach;

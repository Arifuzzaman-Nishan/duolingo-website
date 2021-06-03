import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faStore } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const brandImg = 'https://d35aaqx5ub95lt.cloudfront.net/vendor/85a54b84f53cfe25fc8d9ff17e5a60f3.svg'
const DiscussImg = 'https://d35aaqx5ub95lt.cloudfront.net/vendor/3a52db17e82dec8386d05d126754cefd.svg';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to='/learn'>
            <img
              src={brandImg}
              alt=""
            />
            LEARN
          </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <img
                className="ml-5 nav-icon-size"
                src=""
                alt=""
              />
              <Nav.Link href="#home">Discuss</Nav.Link>

              <img
                className="ml-5 nav-icon-size"
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/25f750f861cdffc01551d728938be59b.svg"
                alt=""
              />
              <Nav.Link href="#link">Shop</Nav.Link>

              <img
                className="ml-5 nav-icon-size"
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/d3f3ad5d80a9a934e00054f56ec5fbe9.svg"
                alt=""
              />
              <Nav.Link href="#link">More</Nav.Link>

              <img
                className="ml-5 "
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/fafe27c9c1efa486f49f87a3d691a66e.svg"
                alt=""
              />

              <img
                className="ml-5 "
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/ba95e6081679d9d7e8c132da5cfce1ec.svg"
                alt=""
              />

              <img
                className="ml-5 "
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/77a8198c60820721c1c28243e13e0419.svg"
                alt=""
              />

              {/* <img
                className="ml-5 round nav-icon-size"
                src="https://s3.amazonaws.com/duolingo-images/avatar/default_2/medium"
                alt=""
              /> */}

              <div class="dropdown">
                <img
                  className="ml-5 round nav-icon-size "
                  src="https://s3.amazonaws.com/duolingo-images/avatar/default_2/medium"
                  alt=""
                />

                <div className="dropdown-content p-2">
                  <h5 className='text-center'>Account</h5>

                  <Link to = '/'>Your Profile</Link>
                  <Link to = '/'>Settings</Link>
                  <Link to='/'>Free Plus</Link>
                  <Link to='/'>Help</Link>
                  <Link to='/'>Logout</Link>
                  
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

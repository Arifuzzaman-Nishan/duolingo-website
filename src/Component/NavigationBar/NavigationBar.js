import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faStore } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import bloodimg from '../../images/blood logo.jpg';



const brandImg =
  "https://d35aaqx5ub95lt.cloudfront.net/vendor/85a54b84f53cfe25fc8d9ff17e5a60f3.svg";

const DiscussImg =
  "https://d35aaqx5ub95lt.cloudfront.net/vendor/3a52db17e82dec8386d05d126754cefd.svg";

const shopImg =
  "https://d35aaqx5ub95lt.cloudfront.net/vendor/25f750f861cdffc01551d728938be59b.svg";

const moreImg =
  "https://d35aaqx5ub95lt.cloudfront.net/vendor/d3f3ad5d80a9a934e00054f56ec5fbe9.svg";

const pic1 =
  "https://d35aaqx5ub95lt.cloudfront.net/vendor/fafe27c9c1efa486f49f87a3d691a66e.svg";

const pic2 =
  "https://d35aaqx5ub95lt.cloudfront.net/vendor/ba95e6081679d9d7e8c132da5cfce1ec.svg";

const pic3 =
  "https://d35aaqx5ub95lt.cloudfront.net/vendor/77a8198c60820721c1c28243e13e0419.svg";

const profile =
  "https://s3.amazonaws.com/duolingo-images/avatar/default_2/medium";

const NavigationBar = () => {
  return (
    <div className="pb-5">
      <Navbar
        fixed="top"
        style={{ borderBottom: "1px solid" }}
        bg="light"
        expand="lg"
      >
        <Container>
          <Link to="/learn">
            <img src={brandImg} alt="" />
            LEARN
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <img className="ml-5 nav-icon-size" src={DiscussImg} alt="" />
              <Nav.Link href="#home">Discuss</Nav.Link>

              <img className="ml-5 nav-icon-size" src={shopImg} alt="" />
              <Nav.Link href="#link">Shop</Nav.Link>

              <img className="ml-5 nav-icon-size" src={moreImg} alt="" />
              <Nav.Link href="#link">More</Nav.Link>

              <img className="ml-5 " src={pic1} alt="" />

              <img className="ml-5 " src={pic2} alt="" />

              <img className="ml-5 " src={pic3} alt="" />

              <img style={{width:'4rem'}} src={bloodimg} alt="" />
              <a className='mt-3' href="www.facebook.com">facebook</a>
              <div class="dropdown">
                <img
                  className="ml-5 round nav-icon-size "
                  src={profile}
                  alt=""
                />

                <div className="dropdown-content p-2">
                  <h5 className="text-center">Account</h5>

                  <Link to="/">Your Profile</Link>
                  <Link to="/setting/account">Settings</Link>
                  <Link to="/">Free Plus</Link>
                  <Link to="/">Help</Link>
                  <Link to="/">Logout</Link>
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

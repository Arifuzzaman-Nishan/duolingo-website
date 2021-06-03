import React from "react";
import { Card } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";


const listTextData = [
    {
      name: "Account",
      path: '/setting/account'
    },
    {
      name: "Learning Language",
    },
    {
      name: "Profile",
    },
    {
      name: "Password",
    },
    {
      name: "Duolingo Plus",
    },
    {
      name: "Notification",
    },
    {
      name: "Coach",
      path: "/setting/coach",
    },
    {
      name: "Progress Sharing",
    },
    {
      name: "Privacy",
    },
  ];

const AccountList = (props) => {


  return (
    <div>
      <Card className="ml-auto p-5" style={{ width: "21rem" }}>
        <div className="d-flex align-items-center">
          <span data-letters="A"></span>
          <h5>Arifuzzaman Nishan</h5>
        </div>
        <h6
          style={{ color: "#35B0F6", cursor: "pointer" }}
          className="ml-5 pl-3"
        >
          VIEW YOUR PROFILE
        </h6>

        <ul>
          {
              listTextData.map(data => <li className='list bold'>
                  <Link style={{textDecoration:'none'}} to = {data.path}>{data.name}</Link>
              </li> )
          }
        </ul>
      </Card>
    </div>
  );
};

export default AccountList;

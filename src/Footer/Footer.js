import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul
        style={{ listStyle: "none" }}
        className="mt-5 d-flex justify-content-around text-secondary"
      >
        <li>
          <small>ABOUT</small>
        </li>
        <li>
          <small>BLOG</small>
        </li>
        <li>
          <small>SCHOOLS</small>
        </li>
        <li>
          <small>APPS</small>
        </li>
        <li>
          <small>HELP</small>
        </li>
        <li>
          <small>GUIDELINES</small>
        </li>
        <li>
          <small>CAREERS</small>
        </li>
        <li>
          <small>TERMS</small>
        </li>
        <li>
          <small>PRIVACY</small>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

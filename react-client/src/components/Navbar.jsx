import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/">
          <Nav.Link>Home</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about">
          <Nav.Link eventKey="/about">About</Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;

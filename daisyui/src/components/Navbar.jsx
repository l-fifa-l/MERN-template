import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  let username = 'Guest';
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost normal-case text-xl">
          About
        </Link>
        <Link
          to={`/profile/${username}`}
          className="btn btn-ghost normal-case text-xl"
        >
          Profile
        </Link>
      </div>
    </>
  );
}

export default Navbar;

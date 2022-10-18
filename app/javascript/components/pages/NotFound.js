import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="notfound">
        <h1 style={{ fontSize: 100 }}>404 NOT FOUND</h1>
        <div className="notfound-button">
          <NavLink to="/">
            <Button color="danger">Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;

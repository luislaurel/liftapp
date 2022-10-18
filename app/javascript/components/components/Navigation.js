import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faRightToBracket,
    faUserPlus,
    faPaperclip, 
    faPeopleGroup,
    faDumbbell,
    faFileCirclePlus, 
    faHouseChimney
} from "@fortawesome/free-solid-svg-icons";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      {!logged_in && (
        <div>
          <Navbar className="unpro-nav" light>
            <NavbarBrand href="/" className="me-auto" >
              <img className="logo-sizing" src="../photos/logo.png"></img>
              {/* <span className="lift-title">
                <i>.LIFT</i>
              </span> */}
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
              <NavLink href="/" className="nav-link">
                <FontAwesomeIcon icon={faHouseChimney} /> Home
                </NavLink>
                <NavLink href={sign_in_route} className="nav-link">
                <FontAwesomeIcon icon={faRightToBracket}/> Login
                </NavLink>
                <NavLink href={new_user_route} className="nav-link">
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                </NavLink>
                <NavLink href="/resources" className="nav-link">
                <FontAwesomeIcon icon={faPaperclip} /> Workout Resources
                </NavLink>
                <NavLink href="/aboutus" className="nav-link">
                <FontAwesomeIcon icon={faPeopleGroup} /> Meet The Team
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}
      {logged_in && (
        <div>
          <Navbar color="faded" className="unpro-nav" light>
            <NavbarBrand href="/" className="me-auto">
            <img className="logo-sizing" src="../photos/logo.png"></img>
              {/* <span className="lift-title">
                <i>.LIFT</i>
              </span> */}
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
              <NavLink href="/dashboard" className="nav-link">
                <FontAwesomeIcon icon={faHouseChimney} /> Dashboard
                </NavLink>
                <NavLink href="/workoutindex" className="nav-link">
                <FontAwesomeIcon icon={faDumbbell} /> Workout Plan
                </NavLink>
                <NavLink href="/workoutnew" className="nav-link">
                <FontAwesomeIcon icon={faFileCirclePlus} /> Add a New Workout
                </NavLink>
                <NavLink href="/resources" className="nav-link">
                <FontAwesomeIcon icon={faPaperclip} /> Workout Resources
                </NavLink>
                <NavLink href={sign_out_route} className="nav-link">
                <FontAwesomeIcon icon={faRightToBracket}/> Log Out
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default Navigation;

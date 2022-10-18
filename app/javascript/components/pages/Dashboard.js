import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShowCard from "../components/ShowCard";
import QuoteComp from "../components/QuoteComp";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  NavLink,
} from "reactstrap";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.logged_in) {
      navigate("/");
    }
  }, []);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
    <div className="dash-bg">
      <div className="dash-header">
        <h1 className="d-header-styling">
          <i>{`WELCOME TO .LIFT ${props.current_user.name}!`}</i>
        </h1>
      </div>
      <div className="comp-arrange">
        <div className="quote-date">
          <div className="date-div">
            <br></br>
            <br></br>
            <Card
              style={{
                width: "18rem", 
              }}
            >
              <CardBody>
                <CardTitle className="date-card">
                  <h3>Today's Date</h3>
                </CardTitle>
                <CardText className="date-card">{date}</CardText>
                <CardTitle className="date-card">
                  <NavLink href="/resources">
                    <Button color="danger">Workout Resources</Button>
                  </NavLink>
                </CardTitle>
              </CardBody>
            </Card>
          </div>
          <br></br>
          <br></br>
          <div className="dash-resource">
            {/* <NavLink href="/resources">
          <Button color="secondary">
              Workout Resouces 
            </Button>
              </NavLink> */}
          </div>
          <br></br>
          <br></br>
          <QuoteComp />
        </div>
        <ShowCard />
      </div>
      <div className="div-padding">
        <img
          src="https://i.postimg.cc/L6vcPfgc/logo-1.png"
          className="about-logo"
        ></img>
      </div>
      </div>
    </>
  );
};

export default Dashboard;

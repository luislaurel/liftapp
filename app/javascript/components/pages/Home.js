import React from "react";
import { Link } from "react-router-dom";

const Home = ({ new_user_route, sign_in_route }) => {
  return (
    <>
      {/* First Section */}
      <div className="home-bg">
        <div className="home-title">
          <h1 className="title">
            <i>
              LET'S GO <span className="title-1">.LIFT( )</span>
            </i>
          </h1>
          <div className="space-button">
            <a style={{ textDecoration: "none" }} href={sign_in_route}>
              <button className="button">LOGIN</button>
            </a>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="welcome-bg">
        <h1 className="page-2">WHAT IS .LIFT()?</h1>
        <p className="para-2">
          Can you recall a time where you felt lost and confused at the gym,
          wondering what you should do next? Yeah, us too... Too many times to
          admit. But here's the thing - no longer are the days you feel lost
          because we solved this issue! With .Lift(), you have the ability to
          plan your workout session before you head to the gym. Create your
          workout plan, see your session, edit your entry if you need to go
          higher in weight, or delete a workout if you don't feel like doing
          that exercise - it's all up to you. It's free to join us! Sign up now
          to start logging those sessions.
        </p>
        <div className="button2-div">
          <Link to="/aboutus">
            <button className="button-left">MEET THE TEAM</button>
          </Link>
          <a href={new_user_route}>
            <button className="button-right">JOIN US TODAY</button>
          </a>
        </div>
      </div>
      {/* Third Section */}
      <div className="page-3">
        <h3 className="contact-us">
          <i>
            <span className="connect">CONNECT</span> WITH US
          </i>
        </h3>
        <div className="email">
          <h2 className="email-style">
            <i>JJLCCORP@GMAIL.COM</i>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Card, CardHeader, ListGroup, ListGroupItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const WorkoutIndex = ({ workouts, current_user }) => {
  const filteredWorkouts = workouts?.filter(
    (workout) => workout.user_id === current_user.id
  );
  return (
    <>
      <div className="index-background">
        <h1 className="index-title">
          <i>
            WORKOUT <span className="plan">PLAN</span>
          </i>
        </h1>
        <div className="cards">
          {filteredWorkouts?.map((workout) => {
            return (
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardHeader className="workout">
                  <b>Workout</b>
                </CardHeader>
                <ListGroup>
                  <ListGroupItem>
                    <b>Name:</b> {workout.name}
                  </ListGroupItem>
                  <ListGroupItem>
                    <b>SetsxReps:</b> {workout.set_reps}
                  </ListGroupItem>
                  <ListGroupItem>
                    <b>Weight:</b> {workout.weight}lbs
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="index-b">
                      <Button color="danger">
                        <NavLink
                          to={`/workoutshow/${workout.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          See Workout
                        </NavLink>
                      </Button>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            );
          })}
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

export default WorkoutIndex;

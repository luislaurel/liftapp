import React from "react";
import { Card, CardBody, CardTitle, Button, CardText } from "reactstrap";
import { NavLink, useParams } from "react-router-dom";
import DeleteConfirmation from "../components/DeleteConfirmation";

const WorkoutShow = ({ workouts, deleteWorkout }) => {
  const { id } = useParams();
  const workout = workouts?.find((workout) => workout.id === +id);

  const handleDelete = () => {
    deleteWorkout(id);
  };

  return (
    <>
      <div className="show-bg">
        <h1 className="show-title">
          <i>
            <span className="my-title">MY</span> WORKOUT
          </i>
        </h1>
        <div className="WorkoutShow">
          <Card style={{ width: "25rem", height: "25rem" }}>
            <CardBody>
              <CardTitle tag="h5" className="card-t">
                {workout.name}
              </CardTitle>
              <CardText className="show-info">
                <b>SetsxReps:</b> {workout.set_reps}
              </CardText>
              <CardText className="show-info">
                <b>Weight:</b> {workout.weight}lbs
              </CardText>
              <div className="b-style">
                <div className="edit-button">
                  <NavLink to={`/workoutedit/${workout.id}`}>
                    <Button color="danger">Edit Workout</Button>
                  </NavLink>
                </div>
                <DeleteConfirmation
                  color="danger"
                  handleDelete={handleDelete}
                />
              </div>
            </CardBody>
          </Card>
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

export default WorkoutShow;

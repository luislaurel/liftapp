import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
} from "reactstrap";

const WorkoutNew = ({ createWorkout, logged_in, current_user }) => {
  const navigate = useNavigate();
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    set_reps: "",
    weight: "",
    user_id: current_user.id,
  });
  const handleWorkouts = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    createWorkout(newWorkout);
    navigate("/workoutindex");
  };
  return (
    <>
      <div className="new-bg">
        <div className="components">
          {logged_in && (
            <div className="title-div">
              <h1 className="new-title">
                ADD
                <span className="title-color">
                  <i>YOUR</i>
                </span>
              </h1>
              <h1 className="new-title">WORKOUT</h1>
            </div>
          )}
          {logged_in && (
            <div className="form">
              <Card style={{ height: "27rem", width: "25rem" }}>
                <Form>
                  <FormGroup className="new-form-group">
                    <Label for="name">Workout Name</Label>
                    <Input
                      name="name"
                      placeholder="Enter a name for your workout"
                      type="text"
                      onChange={handleWorkouts}
                      value={newWorkout.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="set_reps">Sets x Reps</Label>
                    <Input
                      name="set_reps"
                      placeholder="Enter your Sets and Reps"
                      type="text"
                      onChange={handleWorkouts}
                      value={newWorkout.set_reps}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="weight">Weight</Label>
                    <Input
                      name="weight"
                      placeholder="Enter the weight"
                      type="text"
                      onChange={handleWorkouts}
                      value={newWorkout.weight}
                    />
                  </FormGroup>
                  <div className="new-button">
                    <Button onClick={handleSubmit} color="danger" name="submit">
                      Submit Workout
                    </Button>
                  </div>
                </Form>
              </Card>
            </div>
          )}
        </div>
      </div>
      {!logged_in && <h1>Please sign in</h1>}
    </>
  );
};

export default WorkoutNew;

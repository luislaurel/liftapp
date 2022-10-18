import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Card } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const WorkoutEdit = ({ workouts, updateWorkout, logged_in }) => {
  const { id } = useParams();

  const currentWorkout = workouts?.find((workout) => workout.id === +id);

  const [editWorkout, setEditWorkout] = useState(workouts);

  const handleWorkouts = (e) => {
    setEditWorkout({ ...editWorkout, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    updateWorkout(editWorkout, currentWorkout.id);
    navigate("/workoutindex");
  };
  return (
    <>
      <div className="edit-bg">
        <div className="edit-components">
          {logged_in && (
            <div className="edit-title-div">
              <h1 className="edit-title">MAKE A </h1>
              <h1 className="edit-title2">
                <i>CHANGE</i>
              </h1>
            </div>
          )}
          {logged_in && (
            <div className="edit-form">
              <Card style={{ height: "27rem", width: "25rem" }}>
                <Form>
                  <FormGroup className="edit-form-group">
                    <Label for="name">Workout Name</Label>
                    <Input
                      name="name"
                      placeholder="Change workout name"
                      type="text"
                      onChange={handleWorkouts}
                      value={workouts.name}
                    />
                    <Label for="set_reps">Sets x Reps</Label>
                    <Input
                      name="set_reps"
                      placeholder="Change your Sets/Reps "
                      type="text"
                      onChange={handleWorkouts}
                      value={workouts.set_reps}
                    />
                    <Label for="weight">Change weight</Label>
                    <Input
                      name="weight"
                      placeholder="Change weight"
                      type="number"
                      onChange={handleWorkouts}
                      value={workouts.weight}
                    />
                  </FormGroup>
                  <div className="edit-form-button">
                    <Button onClick={handleSubmit} name="submit" color="danger">
                      Update Workout
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

export default WorkoutEdit;

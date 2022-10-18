import { screen, render } from "@testing-library/react";
import WorkoutEdit, {currentWorkout } from "./WorkoutEdit";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";


const workouts = [{
  name: 'bench',
  set_reps: '40x40',
  weight: 300,
  user_id: 1
}]

describe("<WorkoutEdit/>", () => {
  it("WorkoutEdit renders without error", () => {
    render(
      <MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<WorkoutEdit logged_in={true} workouts={workouts}/>}
          />
        </Routes>
      </MemoryRouter>
    );

    const heading = screen.getByText(/Update workout/i)

    expect(heading).toBeInTheDocument();
  });
  it("form has input fields", () => {
    render(
      <MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<WorkoutEdit  logged_in={true} workouts={workouts} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const textbox = screen.getAllByRole("textbox");

    expect(textbox[0]).toBeEnabled();
  });
});

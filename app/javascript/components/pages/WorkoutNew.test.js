import React from 'react'
import { screen, render } from '@testing-library/react'
import WorkoutNew from './WorkoutNew'
import { BrowserRouter } from 'react-router-dom'

const createWorkout = (workouts) => {
  fetch("/workouts", {
    body: JSON.stringify(workouts),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((payload) => console.log(payload))
    .catch((error) => console.log("Workout create error:", error));
};

describe("<WorkoutNew/>", () => {
    it("WorkoutNew renders without error", () => {
        render(
            <BrowserRouter>
                <WorkoutNew logged_in={true} createWorkout={createWorkout} current_user={true} />
            </BrowserRouter>
            )

        const heading = screen.getByRole("heading", {name: /ADD/i})

        expect(heading).toBeInTheDocument()
    })
    it("form has input fields", () => {
        render(
            <BrowserRouter>
                <WorkoutNew logged_in={true} createWorkout={createWorkout} current_user={true} />
            </BrowserRouter>        )

        const textbox = screen.getAllByRole("textbox")

        expect(textbox[0]).toBeEnabled()
    })
})
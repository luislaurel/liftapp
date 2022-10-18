import React from 'react'
import { screen, render } from '@testing-library/react'
import AboutUs from './AboutUs'
import { BrowserRouter } from "react-router-dom"

describe('AboutUs', () => {
    it('renders the AboutUs page without error', () => {
        render(
            <BrowserRouter>
                <AboutUs />
            </BrowserRouter>
        )
        const aboutUsText = screen.getByText(/MEET THE/i)
        expect(aboutUsText).toBeInTheDocument()
    })
})
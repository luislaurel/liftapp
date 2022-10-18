import React from 'react'
import { screen, render } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from "react-router-dom"

describe('Home', () => {
    it('renders the Home page without error', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const notFoundText = screen.getByText(/LET'S GO/i)
        expect(notFoundText).toBeInTheDocument()
    })
})
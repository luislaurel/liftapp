import React from 'react'
import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'
import { BrowserRouter } from "react-router-dom"

describe('NotFound', () => {
    it('renders the notfound page without error', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const notFoundText = screen.getByText(/404 NOT FOUND/i)
        expect(notFoundText).toBeInTheDocument()
    })
})
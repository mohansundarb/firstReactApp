import {render, screen } from '@testing-library/react';
import Homepage from './Homepage';

describe('Testing the homapages', ()=> {
    test('1. check the text', ()=>{
        render(<Homepage></Homepage>);
        const homeElement = screen.getByText(/Homepage/i);
        expect(homeElement).toBeInTheDocument()
    })
})
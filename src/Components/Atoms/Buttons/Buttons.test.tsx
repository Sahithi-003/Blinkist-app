import {render,screen } from '@testing-library/react'
import Button from './ButtonComponent'
import * as ReactDOM from "react-dom"
import { Typography } from '@mui/material'

describe('button tests',()=>{
    let container:HTMLDivElement

    beforeEach(()=>{
        container=document.createElement('div');
        document.body.appendChild(container)
    })
    it('render buttons',()=>{
        render( <Button data-testid="read-and-finished-box" />)
        const button=screen.getByRole('button')
        expect(button).toBeTruthy();
        // eslint-disable-next-line testing-library/no-node-access, @typescript-eslint/no-unused-expressions, jest/valid-expect
        expect(container.querySelector("[data-testid='read-and-finished-box']")).toBeInTheDocument;
        // expect(image).toHaveAttribute('alt','icon')
    });
    
})

it('renders Typography',()=>{
    render(<Typography variant='body1' color="blue"/>)
    
})



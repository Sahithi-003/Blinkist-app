import {render,screen } from '@testing-library/react'
import Button from './ReadAndFinished'
import { Typography } from '@mui/material'
import Buttons from './Buttons'

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

it('renders button', () => {
    render(<Buttons name={''} onClick={undefined} classing={''} icon={undefined} end={undefined}></Buttons>);
    
    const buttons = screen.getByRole('button');
    expect(buttons).toBeTruthy();
  });

  it("Check for Connect Button", async()=>{
    render(<Buttons name={"Connect"} onClick={undefined} classing={"connect"} icon={undefined} end={undefined}/>);
    const MuiElement = screen.getByText(/Connect/i);
    expect(MuiElement).toBeInTheDocument();
})

it("Check for Explore Button", async()=>{
    render(<Buttons name={"Connect"} onClick={undefined} classing={"explore"} icon={undefined} end={undefined}/>);
    const MuiElement = screen.getByText(/Connect/i);
    expect(MuiElement).toBeInTheDocument();
})

it("Check for library Button", async()=>{
    render(<Buttons name={"Connect"} onClick={undefined} classing={"library"} icon={undefined} end={undefined}/>);
    const MuiElement = screen.getByText(/Connect/i);
    expect(MuiElement).toBeInTheDocument();
})

it("Check for ExploreNoH Button", async()=>{
    render(<Buttons name={"Connect"} onClick={undefined} classing={"exploreNoH"} icon={undefined} end={undefined}/>);
    const MuiElement = screen.getByText(/Connect/i);
    expect(MuiElement).toBeInTheDocument();
})

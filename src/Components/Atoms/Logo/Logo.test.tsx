import {render,screen } from '@testing-library/react'
import Logo from "./Logo"

it('render logo',()=>{
    render( <Logo />)
    const image=screen.getByRole('img')
    // expect(image).toHaveAttribute('src','../../../stories/assets/Blinkist.png');
    expect(image).toHaveAttribute('alt','BlinkList')
});

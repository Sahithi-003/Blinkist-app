import {render,screen } from '@testing-library/react'
import Icon from './Icon'

it('render icons',()=>{
    render( <Icon src={'../../../stories/assets/Icons/add.svg'} />)
    const image=screen.getByRole('img')
    expect(image).toHaveAttribute('src','../../../stories/assets/Icons/add.svg');
    expect(image).toHaveAttribute('alt','icon')
});


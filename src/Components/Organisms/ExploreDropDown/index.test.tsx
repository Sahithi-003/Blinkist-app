import { render } from '@testing-library/react';
import ExploreDropDown from './index';
import { BrowserRouter } from 'react-router-dom';

const renderDropDown= () => {
    render(
      <BrowserRouter>
        <ExploreDropDown></ExploreDropDown>
      </BrowserRouter>,
    );
  };
  
  it('DropDown', () => {
    renderDropDown();
  });
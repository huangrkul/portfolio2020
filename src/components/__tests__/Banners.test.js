import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Banners from '../Banners';
import { StateProvider } from '../store';
import { 
  screen, 
  getByTestId, 
  fireEvent, 
  toBeInTheDocument ,
} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    render(<StateProvider><Banners /></StateProvider>, container);
  });
});

it('simulate dropdown list', () => {
  act(() => {
    render(<StateProvider><Banners /></StateProvider>, container);
  });

  const bannerSelect = screen.getByTestId('banner-select');
  const allBannerOptions = bannerSelect.querySelectorAll('option');
  const optionTitle = screen.getByTestId('option-title');

  expect(allBannerOptions[0].innerHTML).toBe('Choose a campaign');

  userEvent.selectOptions(bannerSelect,'T-Mobile - Holiday 2018');
  expect(optionTitle.innerHTML).toBe('T-Mobile - Holiday 2018');

});
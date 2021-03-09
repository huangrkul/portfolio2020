import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import About from '../About';
import { StateProvider } from '../store';
import { getByTestId, screen } from '@testing-library/dom';
import { toBeInTheDocument } from '@testing-library/jest-dom';

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
    render(<StateProvider><About /></StateProvider>, container);
  });
});

it('button functionality works', () => {
  act(() => {
    render(<StateProvider><About /></StateProvider>, container);
  });

  const buttonDev = document.querySelector("[data-testid=dev-button]");
  expect(buttonDev.innerHTML).toBe('Developer');
  const buttonAni = document.querySelector("[data-testid=ani-button]");
  expect(buttonAni.innerHTML).toBe('Animator');

  act(() => {
    buttonDev.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  expect(screen.getByTestId('dev-component')).toBeInTheDocument();

  act(() => {
    buttonAni.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  expect(screen.getByTestId('ani-component')).toBeInTheDocument();

});
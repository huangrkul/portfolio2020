import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AboutProfile from '../AboutProfile';
import { StateProvider } from '../store';

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
    render(<StateProvider><AboutProfile /></StateProvider>, container);
  });
});

it('button click toggles visibility class', () => {
  act(() => {
    render(<StateProvider><AboutProfile /></StateProvider>, container);
  });

  const button1 = document.querySelector("[data-testid=photo-button]");
  expect(button1.innerHTML).toBe('Photo');
  const button2 = document.querySelector("[data-testid=photo-button-exit]");
  expect(button2.innerHTML).toBe('X');

  act(() => {
    button1.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  expect(button1.classList.contains('photo-hide'));

})
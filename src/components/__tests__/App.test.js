import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { StateProvider, store } from '../store';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

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

it('renders without crashing', async () => {
  const data = {
    bg: "partly-cloudy-day",
    summary: "Mostly Cloudy",
    temp: 47.79
  };

  jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(data)
  }));

  await act(async () => {
    render(<StateProvider><App /></StateProvider>, container);
  });

  axios.get.mockRestore();  
});


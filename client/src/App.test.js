import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';


test("rtl renders without crashing", () => {
  rtl.render(<App />)
})

test("toggle-mode works", () => {
  const { getByTestId } = rtl.render(<App />)
  getByTestId("toggle-mode")
})


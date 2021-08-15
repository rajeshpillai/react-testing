import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import UseState from '../features/use-state';

test('shows the children when the checkbox is checked', () => {
  render(<UseState><h2>Hello useState!</h2></UseState>)

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText("Hello useState!")).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText("Hello useState!")).toBeInTheDocument()
})
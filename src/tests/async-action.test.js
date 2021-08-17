import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  screen,
  act,
} from "@testing-library/react";

import userEvent from '@testing-library/user-event'


import AsyncAction from "../features/async-action";

describe.only("Display Todos", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  const successDummyData = [{title: "title 1"}, {title: "title 2"}];


  const promise = Promise.resolve(successDummyData);

  const fetchTodos = jest.fn(() => { 
    console.log("Fetch Todos...");
    return promise;
  });

  // const fetchTodos = jest.fn();

  //https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
  test("Should list the title of all todos if promise resolves", async () => {
    const { getByLabelText, getAllByTestId, getByTestId } = render(
      <AsyncAction listTodos={fetchTodos} />
    );
    const todoWrapElement = getByTestId("todos-container");
    //expect that before any event it should be empty
    expect(todoWrapElement).toBeEmptyDOMElement();

    const getButton = screen.getByText(/Get All Todos/i);
    act(() => {
      fireEvent.click(getButton);
      // const data = screen.getAllByTestId("todo-item").map(item => item.textContent);
    })
    expect(fetchTodos).toHaveBeenCalled();
    await act(() => promise)
    // expect(fetchTodos.mock.calls.length).toBe(1);
    // expect(data).toEqual(successDummyData);
  })
});
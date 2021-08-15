import React from "react";
import Button from "../features/button-event";
import {render, fireEvent, cleanup} from "@testing-library/react"

afterEach(cleanup);

const defaultProps = { 
    onClick: jest.fn(),
    text: "Submit" ,
};

test('button renders with correct text', () => {
    const { queryByText, rerender } = render(<Button {...defaultProps} />);
    expect(queryByText("Submit")).toBeTruthy(); 
  
    // Change props
    rerender(<Button {...defaultProps} text="Go" />);
    expect(queryByText("Go")).toBeTruthy(); 
});

test('calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClick} />)
    fireEvent.click(getByText(defaultProps.text));
    expect(onClick).toHaveBeenCalled();
});

test('The button should be enabled', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    expect(getByText(defaultProps.text)).not.toHaveAttribute('disabled')
});
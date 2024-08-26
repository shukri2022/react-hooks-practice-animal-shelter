import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "../components/Filters";

const FILTERS_STATE = {
  type: "all",
};

test("calls the `onChangeType` prop callback when the animal type select changes", () => {
  const onChangeType = jest.fn();
  render(<Filters onChangeType={onChangeType} filters={FILTERS_STATE} />);

  // Select the <select> element by its role
  const select = screen.getByRole("combobox");
  
  // Trigger the change event on the <select> element
  fireEvent.change(select, { target: { value: "dog" } });
  
  // Ensure the onChangeType callback is called
  expect(onChangeType).toHaveBeenCalled();
});

test('calls the `onFindPetsClick` callback prop when the "Find pets" button is clicked', () => {
  const onFindPetsClick = jest.fn();
  render(<Filters onFindPetsClick={onFindPetsClick} filters={FILTERS_STATE} />);

  // Select the button by its text
  const button = screen.getByRole("button", { name: /Find pets/i });
  
  // Trigger the click event on the button
  fireEvent.click(button);
  
  // Ensure the onFindPetsClick callback is called
  expect(onFindPetsClick).toHaveBeenCalled();
});

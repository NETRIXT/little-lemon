import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

const mockUpdateTimes = jest.fn();

const mockAvailableTimes = [
  { time: "09:00 AM", booked: false },
  { time: "10:00 AM", booked: false },
  { time: "12:00 PM", booked: false }
];

test("Renders the updateTimes and initializeTimes functions", async () => {
  render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);


  await waitFor(() => {
    expect(screen.getByText("Choose date")).toBeInTheDocument();
  });
});



test('Renders the Choose date heading', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

function updateTimes(state, times) {
  return times;
}

test("Invalid name shows error message", () => {
  render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
  const nameInput = screen.getByLabelText(/Your Name/i);

  fireEvent.change(nameInput, { target: { value: "Vlad@" } });

  const errorMessage = screen.getByText(/Please enter a valid name with letters and spaces only/i);
  expect(errorMessage).toBeInTheDocument();
});

test('updateTimes should return the same value as provided in the state', () => {
  const state = [
    { time: "12:00 PM", booked: false },
    { time: "1:00 PM", booked: true },
    { time: "2:00 PM", booked: false },
  ];

  const updatedState = updateTimes(state, [
    { time: "3:00 PM", booked: false },
    { time: "4:00 PM", booked: true },
  ]);

  expect(updatedState).toEqual([
    { time: "3:00 PM", booked: false },
    { time: "4:00 PM", booked: true },
  ]);
});

describe("BookingForm HTML5 validation check", () => {
  test("date input has 'required' attribute", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute("required");
  });

  test("time select has 'required' attribute", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("guests input has 'required', 'min', and 'max' attributes", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select has 'required' attribute", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });
});

describe("BookingForm JS validation functions", () => {
  test("submit button is disabled when the form is invalid", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const submitButton = screen.getByText(/Make Your reservation/i);
    expect(submitButton).toBeDisabled();

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    fireEvent.change(dateInput, { target: { value: "2023-07-27" } });
    fireEvent.change(timeSelect, { target: { value: "12:00" } });

    expect(submitButton).toBeDisabled();
  });

  test("submit button is enabled when the form is valid", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
    const submitButton = screen.getByText(/Make Your reservation/i);
    expect(submitButton).toBeDisabled();

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const nameInput = screen.getByLabelText(/Your Name/i);

    fireEvent.change(nameInput, { target: { value: "Vlad" } });
    fireEvent.change(dateInput, { target: { value: "2023-07-27" } });
    fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    expect(submitButton).not.toBeDisabled();
  });
});
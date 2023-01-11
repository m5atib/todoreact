import { fireEvent, render, screen } from "@testing-library/react";
import AddNewTodo from "./AddNewTodo";

const onSubmitHandler = jest.fn();

describe("AddNewTodo", () => {
  //New Todo
  it("should has a new todo heading", () => {
    render(<AddNewTodo addNewHandler={onSubmitHandler} />);
    const el = screen.getByRole("heading");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("New Todo");
  });

  //What is your next task title?
  it("should has placeholder for the todo title input", () => {
    render(<AddNewTodo addNewHandler={onSubmitHandler} />);
    const el = screen.getByPlaceholderText(/What is your next task title?/i);
    expect(el).toBeInTheDocument();
  });
  it("should be able to type into todo title input", () => {
    render(<AddNewTodo addNewHandler={onSubmitHandler} />);
    const el: HTMLInputElement = screen.getByPlaceholderText(
      /What is your next task title?/i
    );
    fireEvent.click(el);
    fireEvent.change(el, { target: { value: "Read a new book" } });
    expect(el.value).toBe("Read a new book");
  });

  //Task description...
  it("should has placeholder for the todo description input", () => {
    render(<AddNewTodo addNewHandler={onSubmitHandler} />);
    const el = screen.getByPlaceholderText(/Task description.../i);
    expect(el).toBeInTheDocument();
  });
  it("should be able to type into todo description input", () => {
    render(<AddNewTodo addNewHandler={onSubmitHandler} />);
    const el: HTMLInputElement =
      screen.getByPlaceholderText(/Task description.../i);
    fireEvent.click(el);
    fireEvent.change(el, { target: { value: "Read a desgin systems book" } });
    expect(el.value).toBe("Read a desgin systems book");
  });

  //check if the function should be called
  it("should the function should be called when add button clicked", () => {
    onSubmitHandler.mockImplementation((event) => {
      event.preventDefault();
    });
    render(<AddNewTodo addNewHandler={onSubmitHandler} />);

    const el: HTMLInputElement = screen.getByPlaceholderText(
      /What is your next task title?/i
    );
    fireEvent.click(el);
    fireEvent.change(el, { target: { value: "Read a new book" } });
    const buttonElement = screen.getByText("Add");
    fireEvent.click(buttonElement);
    expect(onSubmitHandler).toBeCalled();
  });
//   it("should the function should not be called when add button clicked and the title is empty", () => {
//     onSubmitHandler.mockImplementation((event) => {
//       event.preventDefault();
//     });
//     render(<AddNewTodo addNewHandler={onSubmitHandler} />);
//     fireEvent.submit(screen.getByTestId('formy'));
//     expect(onSubmitHandler).toBeCalled();
//   });
});

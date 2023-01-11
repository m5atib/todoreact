import { fireEvent, render, screen } from "@testing-library/react";
import AddNewTodo from "./AddNewTodo";

const mockedAddHandler = jest.fn();

describe("AddNewTodo", () => {
  //New Todo
  it("should has a new todo heading", () => {
    render(<AddNewTodo addNewHandler={mockedAddHandler} />);
    const el = screen.getByRole("heading");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("New Todo");
  });

  //What is your next task title?
  it("should has placeholder for the todo title input", () => {
    render(<AddNewTodo addNewHandler={mockedAddHandler} />);
    const el = screen.getByPlaceholderText(/What is your next task title?/i);
    expect(el).toBeInTheDocument();
  });
  it("should be able to type into todo title input", () => {
    render(<AddNewTodo addNewHandler={mockedAddHandler} />);
    const el: HTMLInputElement = screen.getByPlaceholderText(
      /What is your next task title?/i
    );
    fireEvent.click(el);
    fireEvent.change(el, { target: { value: "Read a new book" } });
    expect(el.value).toBe("Read a new book");
  });

  //Task description...
  it("should has placeholder for the todo description input", () => {
    render(<AddNewTodo addNewHandler={mockedAddHandler} />);
    const el = screen.getByPlaceholderText(/Task description.../i);
    expect(el).toBeInTheDocument();
  });
  it("should be able to type into todo description input", () => {
    render(<AddNewTodo addNewHandler={mockedAddHandler} />);
    const el: HTMLInputElement = screen.getByPlaceholderText(
      /Task description.../i
    );
    fireEvent.click(el);
    fireEvent.change(el, { target: { value: "Read a desgin systems book" } });
    expect(el.value).toBe("Read a desgin systems book");
  });
});

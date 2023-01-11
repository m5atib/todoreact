import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer";

const Status = {
    counter:10,
    doneCounter:6,
    remCounter:4
  }
describe("Footer", () => {
    it("should render the status of all todo", ()=> {
        render(<Footer Status={Status}/>)
        const el:HTMLSpanElement = screen.getByTestId('alltasks')
        expect(el).toHaveTextContent(Status.counter+"")
    })
    it("should render the status of completed todo", ()=> {
        render(<Footer Status={Status}/>)
        const el:HTMLSpanElement = screen.getByTestId('completedtasks')
        expect(el).toHaveTextContent(Status.doneCounter+"")
    })
    it("should render the status of remain todo", ()=> {
        render(<Footer Status={Status}/>)
        const el:HTMLSpanElement = screen.getByTestId('remtasks')
        expect(el).toHaveTextContent((Status.counter-Status.doneCounter)+"")
    })

})
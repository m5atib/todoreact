import "./App.css";
import AddNewTodo from "./components/AddNew/AddNewTodo";
import { FakeTodo } from "./components/Todos/dummyData";
import { TodoCardData } from "./components/Todos/TodoCard";
import TodoList from "./components/Todos/TodoList";
import { useState } from "react";
function App() {
  const [myTodos, setMyTodos] = useState<TodoCardData[]>([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const pairs = Array.from(formData.entries());

    let todoObj: any = {};
    for (let [name, value] of pairs) {
      todoObj[name.toString()] = value.toString().trim();
    }

    todoObj["id"] = "task#" + Math.floor(Math.random() * 100000000);
    todoObj["createdDate"] = new Date().toLocaleString();
    todoObj["done"] = false;

    if (todoObj.title == "") return;
    setMyTodos((pre) => [...pre, todoObj]);
  };
  return (
    <div className="dark:bg-slate-700 relative flex md:flex-row flex-wrap flex-col justify-between md:gap-16 gap-8 divide-slate-100">
      <AddNewTodo addNewHandler={handleSubmit} />
      <TodoList Todos={myTodos} />
    </div>
  );
}

export default App;

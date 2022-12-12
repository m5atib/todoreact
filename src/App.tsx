import "./App.css";
import AddNewTodo from "./components/AddNew/AddNewTodo";
import { FakeTodo } from "./components/Todos/dummyData";
import { TodoCardData } from "./components/Todos/TodoCard";
import TodoList from "./components/Todos/TodoList";
import { useEffect, useState } from "react";
import Searchbar from "./components/Todos/Searchbar";
function App() {
  const [myTodos, setMyTodos] = useState<TodoCardData[]>([]);
  const [searchMyTodos, setSearchMyTodos] = useState<TodoCardData[]>([]);
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

  const searchHandler = (text: string) => {
    if (text.trim() != "") {
      setSearchMyTodos(
        myTodos.filter(
          (item) => item.title.toLowerCase().indexOf(text.trim().toLowerCase()) > -1
        )
      );
    } else {
      setSearchMyTodos(myTodos);
    }
  };
  useEffect(()=> setSearchMyTodos(myTodos),[myTodos])
  return (
    <div className="dark:bg-slate-700 relative flex md:flex-row flex-wrap flex-col justify-between md:gap-16 gap-8 divide-slate-100">
      <AddNewTodo addNewHandler={handleSubmit} />
      <div className="z-40 dark:bg-slate-700 flex-1 flex flex-col items-center gap-4 md:p-16 py-16 px-4">
        <Searchbar searchHandler={searchHandler} />
        <TodoList Todos={searchMyTodos} />
      </div>
    </div>
  );
}

export default App;

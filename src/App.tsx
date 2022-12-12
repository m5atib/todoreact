import './App.css';
import { FakeTodo } from './components/Todos/dummyData';
import TodoList from './components/Todos/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList Todos={FakeTodo}/>
    </div>
  );
}

export default App;

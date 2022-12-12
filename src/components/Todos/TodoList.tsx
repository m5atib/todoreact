import Searchbar from "./Searchbar";
import TodoCard, { TodoCardData } from "./TodoCard";

type CardListProps = {
  Todos: TodoCardData[];
};
const TodoList = ({ Todos }: CardListProps) => {
  return (
    
      <div className="w-full flex flex-col items-center gap-4">
        {Todos.map((item) => (
          <TodoCard Data={item} key={item.id} />
        ))}
      </div>
  
  );
};

export default TodoList;

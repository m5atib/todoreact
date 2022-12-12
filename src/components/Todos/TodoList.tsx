import Searchbar from "./Searchbar";
import TodoCard, { TodoCardData } from "./TodoCard";

type CardListProps = {
  Todos: TodoCardData[];
  markHandler : (todoId:string) => void
};
const TodoList = ({ Todos,markHandler }: CardListProps) => {
  return (
    
      <div className="w-full flex flex-col items-center gap-4">
        {Todos.map((item) => (
          <TodoCard Data={item} key={item.id} MarkAsDone={markHandler}/>
        ))}
      </div>
  
  );
};

export default TodoList;

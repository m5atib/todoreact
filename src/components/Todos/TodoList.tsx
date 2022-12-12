import TodoCard, { TodoCardData } from "./TodoCard";

type CardListProps = {
  Todos: TodoCardData[];
};
const TodoList = ({ Todos }: CardListProps) => {
  return (
    <div className="z-40 dark:bg-slate-700 flex-1 flex flex-col items-center gap-4 md:p-16 py-16 px-4">
      <div className=" flex flex-col items-center gap-4">
        {Todos.map((item) => (
          <TodoCard Data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

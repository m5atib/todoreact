import TodoCard, { TodoCardData } from "./TodoCard";

type CardListProps = {
  Todos: TodoCardData[];
};
const TodoList = ({ Todos }: CardListProps) => {
  const ItemsList = Todos.map((item) => <TodoCard Data={item} key={item.id} />);
  return <div>{ItemsList}</div>;
};

export default TodoList;

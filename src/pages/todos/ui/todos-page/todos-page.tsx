import { AddTodoButton } from "../add-todo-button/add-todo-button";
import { TodoList } from "../todo-list/todo-list";

export function TodosPage() {
  return (
    <>
      <TodoList />
      <AddTodoButton />
    </>
  );
}

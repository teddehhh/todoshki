import {
  TodoProvider
} from "../../../entities/todo/model/todo-context";
import { TodoList } from "./todo-list/todo-list";

export function TodosPage() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

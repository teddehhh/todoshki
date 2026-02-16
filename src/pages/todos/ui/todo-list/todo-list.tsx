import { useTodoContext } from "../../../../entities/todo/model/todo-context";
import type { Todo } from "../../../../entities/todo/types/todo";
import { AddTodoButton } from "../add-todo-button/add-todo-button";
import { TodoItemMemo } from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

export function TodoList() {
  const { todos, updateTodo, addTodo, removeTodo } = useTodoContext();

  const handleAddTodo = (todo: Todo) => addTodo(todo);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["list"]}>
        {todos.map((todo) => (
          <TodoItemMemo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <AddTodoButton addTodo={handleAddTodo} />
    </div>
  );
}

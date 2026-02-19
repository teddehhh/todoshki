import { useTodoContext } from "../../../../entities/todo/model/todo-context";
// import type { Todo } from "../../../../entities/todo/types/todo";
// import { AddTodoButton } from "../add-todo-button/add-todo-button";
import { TodoItemMemo } from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

export function TodoList() {
  const { todos, updateTodo, removeTodo } = useTodoContext();

  // const handleAddTodo = (todo: Todo) => addTodo(todo);

  return (
    <>
      <div className={styles["title-container"]}>
        <div>Учеба</div>
        <div>5 заметок</div>
      </div>
      <div className={styles["list-container"]}>
        {todos.map((todo) => (
          <TodoItemMemo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
        {/* <AddTodoButton addTodo={handleAddTodo} /> */}
      </div>
    </>
  );
}

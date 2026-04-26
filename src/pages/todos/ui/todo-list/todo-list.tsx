import { useTodoStateContext } from "@/entities/todo";
import { TodoItemMemo } from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

export function TodoList() {
  const { todos, loading, error } = useTodoStateContext();

  return (
    <>
      <div className={styles["title-container"]}>
        <div>Учеба</div>
        <div>5 заметок</div>
      </div>
      {error ? (
        error.message
      ) : (
        <div className={styles["list-container"]}>
          {loading ? (
            <>Идет загрузка...</>
          ) : (
            todos.map((todo) => <TodoItemMemo key={todo.id} todo={todo} />)
          )}
        </div>
      )}
    </>
  );
}

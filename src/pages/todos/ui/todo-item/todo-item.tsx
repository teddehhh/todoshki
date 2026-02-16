import { memo, useCallback, type ChangeEvent } from "react";
import type {
  Todo,
  TodoContextProps,
} from "../../../../entities/todo/types/todo";
import { TodoDisplayMemo } from "../todo-display/todo-display";
import styles from "./todo-item.module.css";

interface TodoItemProps {
  todo: Todo;
  updateTodo: TodoContextProps["updateTodo"];
  removeTodo?: TodoContextProps["removeTodo"];
}

export const TodoItemMemo = memo(TodoItem);

export function TodoItem(props: TodoItemProps) {
  const { todo, updateTodo, removeTodo } = props;
  console.log("TodoItem");

  const handleCheck = (todo: Todo, event: ChangeEvent<HTMLInputElement>) => {
    updateTodo(todo.id, { completed: event.target.checked });
  };

  const handleUpdateText = useCallback((text: string) => {
    updateTodo(todo.id, { ...todo, text });
  }, []);

  const handleRemove = (todoId: Todo["id"]) => {
    removeTodo?.(todoId);
  };

  return (
    <div className={styles["wrapper"]}>
      <div>{todo.id}. </div>
      <div className={styles["item"]}>
        <TodoDisplayMemo text={todo.text} updateText={handleUpdateText} />
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(event) => {
              handleCheck(todo, event);
            }}
          />
          {removeTodo && (
            <button onClick={() => handleRemove(todo.id)}>&#x1F5D1;</button>
          )}
        </div>
      </div>
    </div>
  );
}

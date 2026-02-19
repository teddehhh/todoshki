import { memo, useCallback, useContext, type ChangeEvent } from "react";
import type { Todo } from "../../../../entities/todo/types/todo";
import { TodoDisplayMemo } from "../todo-display/todo-display";
import styles from "./todo-item.module.css";
import { TodoActionsContext } from "../../../../entities/todo/model/todo-context";

interface TodoItemProps {
  todo: Todo;
  onTextUpdate?: (todoId: number, todo: Partial<Todo>) => void;
}

export const TodoItemMemo = memo(TodoItem);

export function TodoItem(props: TodoItemProps) {
  const { todo, onTextUpdate } = props;
  const { updateTodo, removeTodo } = useContext(TodoActionsContext);

  const handleCheck = (todo: Todo, event: ChangeEvent<HTMLInputElement>) => {
    updateTodo(todo.id, { completed: event.target.checked });
  };

  const handleUpdateText = useCallback((text: string) => {
    if (onTextUpdate) {
      onTextUpdate(todo.id, { ...todo, text });
      return;
    }

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
          {<button onClick={() => handleRemove(todo.id)}>&#x1F5D1;</button>}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import type { Todo } from "../../../../entities/todo/types/todo";
import { TodoItem } from "../todo-item/todo-item";
import { useTodoActionsContext } from "../../../../entities/todo/lib/hooks/use-todo-actions";

export function AddTodoButton() {
  const [clicked, setClicked] = useState(false);
  const { addTodo } = useTodoActionsContext();

  const handleClick = () => setClicked((prev) => !prev);

  if (!clicked) {
    return <button onClick={handleClick}>добавить</button>;
  }

  const handleAddTodo = (todoId: Todo["id"], todo: Partial<Todo>) => {
    setClicked(false);
    if (todo.text) {
      addTodo({ id: todoId, ...todo } as Todo);
    }
  };

  const newTodo: Todo = {
    id: Number(new Date()),
    text: null,
    completed: false,
    createdAt: new Date().toString(),
  };

  return <TodoItem todo={newTodo} onTextUpdate={handleAddTodo} />;
}

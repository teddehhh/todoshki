import { useState } from "react";
import { TodoItem } from "../todo-item/todo-item";
import { useTodoActionsContext, type Todo } from "@/entities/todo";

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

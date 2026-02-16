import { useState } from "react";
import type {
  Todo,
  TodoContextProps,
} from "../../../../entities/todo/types/todo";
import { TodoItemMemo } from "../todo-item/todo-item";

interface AddTodoButtonProps {
  addTodo: TodoContextProps["addTodo"];
}

export function AddTodoButton(props: AddTodoButtonProps) {
  const { addTodo } = props;
  const [clicked, setClicked] = useState(false);

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
    category: "",
    completed: false,
    createdAt: new Date().toString(),
  };

  return <TodoItemMemo todo={newTodo} updateTodo={handleAddTodo} />;
}

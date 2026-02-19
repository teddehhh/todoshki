import { useContext } from "react";
import { TodoStateContext } from "../../model/todo-context";

export function useTodoStateContext() {
  const context = useContext(TodoStateContext);

  if (!context) {
    throw new Error("component or hook must use TodoProvider");
  }

  return context;
}

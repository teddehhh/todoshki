import { useContext } from "react";
import { TodoActionsContext } from "../../model/todo-context";

export function useTodoActionsContext() {
  const context = useContext(TodoActionsContext);

  if (!context) {
    throw new Error("component or hook must use TodoProvider");
  }

  return context;
}

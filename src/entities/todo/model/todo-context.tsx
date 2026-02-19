import { createContext, type PropsWithChildren } from "react";
import type { TodoActions, TodoState } from "../types/todo";
import { useTodos } from "../lib/hooks/use-todos";

export const TodoStateContext = createContext<TodoState>(null!);
export const TodoActionsContext = createContext<TodoActions>(null!);

export const TodoProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { todos, loading, error, actions } = useTodos();

  return (
    <TodoStateContext.Provider
      value={{
        todos,
        loading,
        error,
      }}
    >
      <TodoActionsContext.Provider value={actions}>
        {children}
      </TodoActionsContext.Provider>
    </TodoStateContext.Provider>
  );
};

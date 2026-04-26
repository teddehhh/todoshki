import type { PropsWithChildren } from "react";
import { useTodos } from "../lib/hooks/use-todos";
import { TodoActionsContext, TodoStateContext } from "../model/todo-context";

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

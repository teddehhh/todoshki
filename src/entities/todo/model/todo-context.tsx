import {
  createContext,
  useCallback,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import type { Todo, TodoContextProps } from "../types/todo";
import { TODOS } from "../lib/constants/todos";

export const TodoContext = createContext<TodoContextProps | null>(null);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within TodoProvider");
  }
  return context;
};

export const TodoProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  const initTodos = useCallback((todos: Todo[]) => {
    setTodos(todos);
  }, []);

  const addTodo = useCallback((todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  }, []);

  const removeTodo = useCallback((todoId: Todo["id"]) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  }, []);

  const updateTodo = useCallback(
    (todoId: Todo["id"], updatedTodo: Partial<Todo>) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === todoId ? { ...todo, ...updatedTodo } : todo,
        ),
      );
    },
    [],
  );

  return (
    <TodoContext.Provider
      value={{ todos, initTodos, addTodo, updateTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

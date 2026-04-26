import { useCallback, useEffect, useMemo, useState } from "react";
import type { Todo, TodoError } from "../../types/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<TodoError>(null);

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

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      console.log(data);
    };

    getTodos();
  }, []);

  const actions = useMemo(
    () => ({
      initTodos,
      updateTodo,
      removeTodo,
      addTodo,
    }),
    [initTodos, updateTodo, addTodo, removeTodo],
  );

  return {
    todos,
    loading,
    error,
    actions,
  };
}

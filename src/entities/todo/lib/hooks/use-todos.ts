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
    async function fetchTodos() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/todos");
        const data = await res.json();

        setTodos(data);
      } catch (error) {
        setError({ message: "Не удалось загрузить данные", details: error });
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }

    fetchTodos();
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

export interface Todo {
  id: number;
  text: string | null;
  completed: boolean;
  category: string;
  createdAt: string;
}

export interface TodoContextProps {
  todos: Todo[];
  initTodos: (_: Todo[]) => void;
  addTodo: (_: Todo) => void;
  updateTodo: (todoId: Todo["id"], _: Partial<Todo>) => void;
  removeTodo: (_: Todo["id"]) => void;
}

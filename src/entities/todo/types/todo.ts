export interface Todo {
  id: number;
  text: string | null;
  completed: boolean;
  createdAt: string;
}

export type TodoError = {
  message: string;
  details: unknown;
} | null;

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: TodoError;
}

export interface TodoActions {
  initTodos: (_: Todo[]) => void;
  addTodo: (_: Todo) => void;
  updateTodo: (todoId: Todo["id"], _: Partial<Todo>) => void;
  removeTodo: (_: Todo["id"]) => void;
}

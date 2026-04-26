import { createContext } from "react";
import type { TodoActions, TodoState } from "../types/todo";

export const TodoStateContext = createContext<TodoState>(null!);
export const TodoActionsContext = createContext<TodoActions>(null!);

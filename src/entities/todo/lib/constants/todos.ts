import type { Todo } from "../../types/todo";

export const TODOS: Todo[] = [
  {
    id: 1,
    text: "Изучить принципы Reconciliation в React Fiber",
    completed: false,
    category: "Учеба",
    createdAt: "2023-10-01T10:00:00Z",
  },
  {
    id: 2,
    text: "Купить молоко и безлактозный сыр",
    completed: true,
    category: "Дом",
    createdAt: "2023-10-02T12:30:00Z",
  },
  {
    id: 3,
    text: "Подготовить доклад по архитектуре FSD",
    completed: false,
    category: "Работа",
    createdAt: "2023-10-03T09:15:00Z",
  },
  {
    id: 4,
    text: "Записаться на курс по TypeScript (Advanced)",
    completed: false,
    category: "Учеба",
    createdAt: "2023-10-04T15:00:00Z",
  },
  {
    id: 5,
    text: "Починить кран в ванной",
    completed: false,
    category: "Дом",
    createdAt: "2023-10-05T18:45:00Z",
  },
  {
    id: 6,
    text: "Провести ревью пул-реквестов команды",
    completed: true,
    category: "Работа",
    createdAt: "2023-10-05T11:00:00Z",
  },
  {
    id: 7,
    text: "Покормить кота",
    completed: true,
    category: "Дом",
    createdAt: "2023-10-06T08:00:00Z",
  },
];

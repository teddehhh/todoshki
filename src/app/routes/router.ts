import { createBrowserRouter } from "react-router";
import { TodosPage } from "../../pages/todos/ui/todos-page";
import { ErrorPage } from "../../pages/error/error-page";
import { HomePage } from "../../pages/home/home-page";
import { TodosLayout } from "../layouts/todos-layout";
import { TodoPage } from "../../pages/todo/ui/todo-page";
import { AppLayout } from "../layouts/app-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/todos",
        Component: TodosLayout,
        children: [
          { index: true, Component: TodosPage },
          { path: ":id", Component: TodoPage },
        ],
      },
    ],
  },
]);
// export const router = createBrowserRouter([
//   { path: "/", Component: HomePage, ErrorBoundary: ErrorPage },
//   {
//     path: "/todos",
//     Component: TodosLayout,
//     children: [
//       { index: true, Component: TodosPage },
//       { path: ":id", Component: TodoPage },
//     ],
//   },
// ]);

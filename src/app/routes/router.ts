import { createBrowserRouter } from "react-router";
import { ErrorPage } from "../../pages/error/error-page";
import { HomePage } from "../../pages/home/home-page";
import { TodoPage } from "../../pages/todo/ui/todo-page";
import { TodosPage } from "../../pages/todos/ui/todos-page/todos-page";
import { AppLayout } from "../layouts/app-layout";
import { RegisterPage } from "../../pages/register/register-page";
import { LoginPage } from "../../pages/login/login-page";
import { TodosRoute } from "./todos-route";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/todos",
        Component: TodosRoute,
        children: [
          { index: true, Component: TodosPage },
          { path: ":id", Component: TodoPage },
        ],
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import { TodosRoute } from "./todos-route";
import { AppLayout } from "../layouts/app-layout/ui/app-layout";
import { ErrorPage } from "@/pages/error";
import { HomePage } from "@/pages/home";
import { TodoPage } from "@/pages/todo";
import { TodosPage } from "@/pages/todos";
import { RegisterPage } from "@/pages/register";
import { LoginPage } from "@/pages/login";

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

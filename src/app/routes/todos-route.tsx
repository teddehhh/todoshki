import { Outlet } from "react-router";
import { ProtectedRoute } from "../../shared/ui/protected-route";
import { TodosLayout } from "../layouts/todos-layout/ui/todos-layout";
import { TodoProvider } from "../../entities/todo/model/todo-context";

export function TodosRoute() {
  return (
    <ProtectedRoute>
      <TodoProvider>
        <TodosLayout>
          <Outlet />
        </TodosLayout>
      </TodoProvider>
    </ProtectedRoute>
  );
}

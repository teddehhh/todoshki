import { Outlet } from "react-router";
import { TodosLayout } from "../layouts/todos-layout/ui/todos-layout";
import { ProtectedRoute } from "@/shared/ui";
import { TodoProvider } from "@/entities/todo";

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

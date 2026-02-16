import { RouterProvider } from "react-router";
import { router } from "../../../routes/router";

export const AppRouterProvider = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

import MainLayout from "./layouts/main";
import { HomePage } from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <MainLayout>
        <Profile />
      </MainLayout>
    ),
  },
]);

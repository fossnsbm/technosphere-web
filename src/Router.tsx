import MainLayout from "./layouts/main";
import { HomePage } from "./pages/Home";
import Register from "./pages/Register";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";
import { LoginPage } from "./pages/Login";

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
  {
    path: "/login",
    element: (
      <MainLayout>
        <LoginPage />
      </MainLayout>
    ),
  },

  {
    path: "/register",
    element: (
      <MainLayout>
        <Register />
      </MainLayout>
    ),
  },
]);

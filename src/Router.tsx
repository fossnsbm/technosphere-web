import MainLayout from "./layouts/main";
import { HomePage } from "./pages/Home";
import Register from "./pages/Register";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";
import { LoginPage } from "./pages/Login";
import Challenges from "./pages/Challenges";
import { LeaderBoardPage } from "./pages/LeaderBoard";
import { WebinarPage } from "./pages/Webinar";
import { CtfPage } from "./pages/flag";
import ApiKey from "./pages/ApiKey";
import { AcceptInvitation } from "./pages/AcceptInvitation";

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

  {
    path: "/challenges",
    element: (
      <MainLayout>
        <Challenges />
      </MainLayout>
    ),
  },

  {
    path: "/leaderboard",
    element: (
      <MainLayout>
        <LeaderBoardPage />
      </MainLayout>
    ),
  },

  {
    path: "/webinar",
    element: (
      <MainLayout>
        <WebinarPage />
      </MainLayout>
    ),
  },

  {
    path: "/ctf",
    element: <CtfPage />,
  },
  {
    path: "/apikey",
    element: <ApiKey />,
  },

  {
    path: "/invitation/:id",
    element: (
      <MainLayout>
        <AcceptInvitation />
      </MainLayout>
    ),
  },
]);

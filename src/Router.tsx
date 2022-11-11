import MainLayout from "./layouts/main";
import { HomePage } from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { IntroSection } from "./components/IntroSection";



export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        {/* <HomePage /> */}
        <IntroSection/>
      </MainLayout>
    ),
  },
]);

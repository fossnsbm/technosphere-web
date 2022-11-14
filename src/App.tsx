import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

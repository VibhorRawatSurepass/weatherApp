import "../src/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./router/AppLayout";
import AppRouter from "./router/AppRouter";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [AppRouter()],
  },
]);

const App = () => {
  return (
    <div className="w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WatchPage from "./components/WatchPage";
import Main from "./layout/Main";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default appRouter;

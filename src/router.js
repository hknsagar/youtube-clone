import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WatchPageContainer from "./layout/WatchPageContainer";
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
        element: <WatchPageContainer />,
      },
    ],
  },
]);

export default appRouter;

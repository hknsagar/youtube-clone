import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

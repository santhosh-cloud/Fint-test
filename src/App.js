import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;

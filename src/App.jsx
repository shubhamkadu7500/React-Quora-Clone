import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Following from "./pages/Following";
import Answer from "./pages/Answer";
import Spaces from "./pages/Spaces";
import Notifications from "./pages/Notifications";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Following" element={<Following />} />
        <Route path="/Answer" element={<Answer />} />
        <Route path="/Spaces" element={<Spaces />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="*" element={<NoMatch />} />{" "}
      </Routes>
    </>
  );
}

export default App;

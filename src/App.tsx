import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/adminpage";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/admin" element = {<Admin />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
